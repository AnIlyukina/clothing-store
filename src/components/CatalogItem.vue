<template>
  <div class="catalog__item">
    <img class="catalog__item-image" :src="require('../assets/images/' + productData.image)"/>
    <p>{{productData.name}}</p>
    <p>Price: {{productData.price}} p.</p>
    <button @click="selectedProduct"
    > Add to cart
    </button>
  </div>
</template>

<script>
export default {
  name:'CatalogItem',
  props: {
    productData:{
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods:{
    selectedProduct(){
      console.log(this.productData)
      this.$emit('selectedProduct', this.productData)
    }
  }
}
</script>

<style>
.catalog__item{
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: 16px;
  margin-bottom: 16px;
}

.catalog__item-image{
  width: 100%;
}
</style>