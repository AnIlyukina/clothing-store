<template>
  <div class="select">
    <p 
      class="select__title"
      @click="arrOptionVisible = !arrOptionVisible"
    > {{selected}}</p>
    <div 
      class="select__options"
      v-if="arrOptionVisible"
    >
        <p class="select__option"
          v-for="option in options"
          :key="option.value"
          @click='selectOption(option)'
        >
          {{option.name}}
        </p>
    </div>
  </div>
</template>

<script>
export default {
name:'Select',
data(){
  return{ 
    arrOptionVisible: false
  }
},
mounted(){
  document.addEventListener('click',this.hideSelect.bind(this), true)
},
beforeDestroy(){
  document.removeEventListener('click',this.hideSelect.bind(this), true)
},
methods:{
  selectOption(option){
    this.$emit('select', option)
    this.arrOptionVisible = false
  },
  hideSelect(){
    this.arrOptionVisible = false
  }
},
props:{
  options:{
    type: Array,
    default(){
      []
    }
  },
  selected:{
    type:String,
    default:''
  }
}
}
</script>

<style>
.select{
  width: 200px;
  position: relative;
  box-sizing: border-box;
}
.select__title{
  margin: 0;
  border: solid 1px rgb(0, 0, 0);
  cursor: pointer;
  border-radius: 4px;
}
.select__options{
  border: solid 1px rgb(0, 0, 0);
  position: absolute;
  top: 25px;
  right: 0px;
  width: 100%;
  border-radius: 4px;
  background-color: rgba(153, 153, 153, 0.555);
}
.select__option{
  margin: 0;
  padding: 0;
}

.select__option:hover{
  background-color: rgb(131, 146, 141);
  cursor: pointer;
}
</style>