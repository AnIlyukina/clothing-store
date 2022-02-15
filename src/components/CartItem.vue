<template>
  <div class="cart__item">
    <img class="cart__item-image" :src="require('../assets/images/' + cart_item_data.image)"/>
    <div class="cart__item-info">
      <p>{{cart_item_data.name}}</p>
      <p>{{cart_item_data.price}}</p>
      <p>{{cart_item_data.article}}</p>
    </div>
    <div class="cart__item-quantity">
      <p>Qty:</p> 
      {{cart_item_data.quantity}}
    </div>
    <button
      @click='deleteCartItem'>
      Delete
    </button>
  </div>
</template>

<script>
export default {
  name:'CartItem',
  props:{
    cart_item_data:{
      type: Object,
      default() {
        return {}
      }
    }
  },
  mounted(){
    this.$set(this.cart_item_data, 'quantity', 1)
  },
  methods:{
    deleteCartItem(){
      console.log('sfas')
      this.$emit('deleteCartItem')
    }
  }
}
</script>

<style>
.cart__item{
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: 16px;
  margin-bottom: 16px;
}

.cart__item-image{
  width: 100px;
}
</style>