<style src="./Product.css"></style>
<template src="./Product.html"></template>

<script>
    export default{
    props: { 
      product: { type: Object} ,
      readonly: Boolean,
    },
    computed: {
      DiscountPrice() { return this.product.pro.Price * this.product.pro.Discount / 100;}
    },

    methods: {
      AddProduct() {
       // this.$store.commit('setIds',this.product.pro.Id);
       this.$emit("OnAddProduct",this.product.pro.Id);
       
      }
    },   
  }
</script>