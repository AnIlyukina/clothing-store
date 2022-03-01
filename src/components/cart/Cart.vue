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
        @increment ='increment(index)'
        @decrement ='decrement(index)'
      />
      <div class="cart__total">
        <p> Total: </p>
        <p> {{cartTotalCost}} </p>
      </div>
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
      'DELETE_CART_ITEM',
      'INCREMENT_CART_ITEM',
      'DECREMENT_CART_ITEM'
    ]),
    deleteCartItem(index){
       this.DELETE_CART_ITEM(index)
      console.log(index)
    },
    increment(index){
      this.INCREMENT_CART_ITEM(index)
    },
    decrement(index){
      this.DECREMENT_CART_ITEM(index)
    }
  },
  computed:{
     cartTotalCost() {
        let result = []
        if (this.cart_data.length) {
          for (let item of this.cart_data) {
            result.push(item.price * item.quantity)
          }
          result = result.reduce(function (sum, el) {
            return sum + el;
          })
          return result;
        } else {
          return 0
        }
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

.cart__total{
  position: fixed;
  margin: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgb(205, 190, 219);
}
</style>