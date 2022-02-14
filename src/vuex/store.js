import Vue from "vue";
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

let store = new Vuex.Store({
  state:{
    products: [],
    cart:[]
  },
  mutations:{
    setProductToState: (state, products) =>{
      state.products = products;
    },
    addToCart:(state, product) =>{
      state.cart.push(product)
    }
  },
  actions:{
    getProductsFromApi({commit}){
      return axios('http://localhost:3000/products', {
        method: "GET"
      })
      .then((products) => {
        commit('setProductToState', products.data);
        return products;
      })
      .catch((error) =>{
        console.log(error)
        return error;
      })
    },
    addToCart({commit}, product){
      commit('addToCart', product)
    }
  },
  getters:{
    products(state){
      return state.products
    },
    cart(state){
      return state.cart
    }
  }
});

export default store;