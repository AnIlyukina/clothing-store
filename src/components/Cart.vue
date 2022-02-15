<template>
  <section class='cart'>
    <h2>Cart</h2>
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

</style>