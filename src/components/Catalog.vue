<template>
  <section class="catalog">
    <h1>Catalog</h1>
    <div class="catalog__list">
      <CatalogItem
        v-for="product in products"
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
      'products'
    ])
  },
  methods:{
    ...mapActions([
      'getProductsFromApi',
      'addToCart'
    ]),
    selectedProduct(data){
      this.addToCart(data)
    }
  },
  mounted(){
    this.getProductsFromApi();
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
</style>