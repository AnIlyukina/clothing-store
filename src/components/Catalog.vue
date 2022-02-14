<template>
  <section class="catalog">
    <h1>Catalog</h1>
    <CatalogItem/>
    <CatalogItem/>
    <CatalogItem/>
    <CatalogItem/>
    <CatalogItem/>
  </section>
</template>

<script>

import CatalogItem from './CatalogItem.vue'

export default {
  name:'Catalog',
  components:{
    CatalogItem,
  }

}
</script>

<style>

</style>