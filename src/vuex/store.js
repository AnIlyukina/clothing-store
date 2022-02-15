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
      let isProductExists = false;
      if (state.cart.length) {
        state.cart.map(function (item) {
          if (item.article === product.article) {
            isProductExists = true;
            item.quantity++
          }
        })
        if (!isProductExists) {
          state.cart.push(product)
        }
      } else {
        state.cart.push(product)
      }
    },
    DELETE_CART_ITEM:(state, index) =>{
      state.cart.splice(index, 1)
    },
    INCREMENT_CART_ITEM:(state, index) =>{
      state.cart[index].quantity++
    },
    DECREMENT_CART_ITEM:(state, index) =>{
      if(state.cart[index].quantity > 1){
        state.cart[index].quantity--
      }
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
    },
    DELETE_CART_ITEM({commit}, index){
      commit('DELETE_CART_ITEM', index)
    },
    DECREMENT_CART_ITEM:({commit}, index) =>{
      commit('DECREMENT_CART_ITEM',index)
    },
    INCREMENT_CART_ITEM:({commit},index ) =>{
      commit('INCREMENT_CART_ITEM',index)
    }
  },
  getters:{
    products(state){
      return state.products
    },
    CART(state){
      return state.cart
    }
  }
});

export default store;