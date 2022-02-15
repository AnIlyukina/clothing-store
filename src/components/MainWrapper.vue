<template>
  <section class="main__wrapper">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </section>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  name:'MainWrapper',
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
  }
}
</script>

<style>

.main__wrapper{
  max-width: 900px;
  margin: 0 auto;
}

</style>