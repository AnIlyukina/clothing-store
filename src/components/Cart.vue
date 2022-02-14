<template>
  <section class='cart'>
    <h2>Cart</h2>
      <CartItem/>
  </section>
</template>

<script>
import CartItem from './CartItem.vue';

export default {
  name:'Cart',
  components:{
    CartItem
  }

}
</script>

<style>

</style>