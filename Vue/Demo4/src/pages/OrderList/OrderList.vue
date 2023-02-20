<style src="./OrderList.css"></style>
<template src="./OrderList.html"></template>

<script setup>
import ProductPage from '../../components/Product/Product.vue'
</script>

<script>
export default{
  data() {
    return {
      SelectedProducts : [],
      products :[],     
  }
},
  beforeMount(){    
    //this.SelectedProducts = this.products.filter((x) => this.$store.getters.getIds.includes(x.Id)); 
    let strproducts = localStorage.getItem('data');
    this.products = JSON.parse(strproducts); 
    let ids = this.$route.params.ids.split(',');
    this.SelectedProducts = this.products.filter((x) => ids.includes(x.Id.toString()));   
 }
}
</script>