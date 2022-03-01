<template>
  <section class="catalog">
    <router-link :to="{name: 'cart', params: {cart_data: CART}}">
      <div class="catalog__cart-icon">Cart : {{CART.length}}</div>
    </router-link>
    <h1>Catalog</h1>
    <Select
      :options="options"
      @select='selectOption'
      :selected='selectedOption'
    />
    <span>Selected: {{selectedOption}}</span>
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
import Select from './Select.vue'
import {mapActions, mapGetters} from 'vuex';

export default {
  name:'Catalog',
  components:{
    CatalogItem,
    Select,
  },
  data(){
    return {
      options: [
        {name:'Option1', value: 1},
        {name:'Option2', value: 2},
        {name:'Option3', value: 3},
        {name:'Option4', value: 4},
        {name:'Option5', value: 5},
      ],
      selectedOption: 'Select',
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
    },
    selectOption(option){
      this.selectedOption = option.name
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