<template>
  <section class='cart'>
    <router-link :to="{name: 'catalog'}">
      <div class="cart__catalog-icon">back to Catalog</div>
    </router-link>
    <h2>Cart</h2>
    <p v-if="!cart_data.length">There are no products in cart...</p>
      <CartItem 
        v-for="item, index in cart_data"
        :key="item.article"
        :cart_item_data="item"
        @deleteCartItem='deleteCartItem(index)'
      />
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import CartItem from './CartItem.vue';

export default {
  name:'Cart',
  components:{
    CartItem
  },
  props:{
    cart_data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods:{
    ...mapActions([
      'DELETE_CART_ITEM'
    ]),
    deleteCartItem(index){
       this.DELETE_CART_ITEM(index)
      console.log(index)
    }
  }

}
</script>

<style>
.cart__catalog-icon{
  max-width: 150px;
  padding: 5px;
  background-color: rgba(71, 141, 141, 0.281);
}
</style>