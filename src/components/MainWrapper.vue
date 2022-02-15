<template>
  <section class="main__wrapper">
      <Catalog/>
      <Cart 
        v-if="CART.length"
        :cart_data='CART'
      />
  </section>
</template>

<script>

import Catalog from './Catalog.vue';
import Cart from './Cart.vue';
import { mapGetters } from 'vuex';

export default {
  name:'MainWrapper',
  components:{
    Catalog,
    Cart,
  },
  props:{
  
  },
  data(){
    return{
      title: 'MainWrapper'
    }
  },
  computed:{
    ...mapGetters([
      'CART',
    ])
  },
  methods:{

  },
  watch:{

  },
  mounted(){

  }
}
</script>

<style>

.main__wrapper{
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  max-width: 900px;
  margin: 0 auto;
}

</style>