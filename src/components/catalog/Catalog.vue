<template>
  <section class="catalog">
    <router-link :to="{name: 'cart', params: {cart_data: CART}}">
      <div class="catalog__cart-icon">Cart : {{CART.length}}</div>
    </router-link>
    <h1>Catalog</h1>
    <div class="catalog__list">
      <CatalogItem
        v-for="product in PRODUCTS"
        :key="product.article"
        :productData = 'product'
        @selectedProduct='selectedProduct'
      />
    </div>
  </section>
</template>

<script>

import CatalogItem from './CatalogItem.vue'
import {mapActions, mapGetters} from 'vuex';

export default {
  name:'Catalog',
  components:{
    CatalogItem,
  },
  data(){
    return {
      
    }
  },
   computed:{
    ...mapGetters([
      'PRODUCTS',
      'CART'
    ])
  },
  methods:{
    ...mapActions([
      'GET_PRODUCT_TO_STATE',
      'ADD_TO_CART'
    ]),
    selectedProduct(data){
      console.log('добавить в корзину')
      this.ADD_TO_CART(data)
    }
  },
  mounted(){
    this.GET_PRODUCT_TO_STATE();
  },

}
</script>

<style>
.catalog__list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.catalog__cart-icon{
  max-width: 100px;
  padding: 5px;
  background-color: rgba(71, 141, 141, 0.281);
}
</style>