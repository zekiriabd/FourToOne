<style src="./Product.css"></style>
<template src="./Product.html"></template>


<script>
  export default{
    props: {
      product: { type: Object}
    },
    
    computed:{
      DiscountPrice() { return this.product.pro.Price * this.product.pro.Discount / 100;}
    }
    

  }
</script>



  
  


