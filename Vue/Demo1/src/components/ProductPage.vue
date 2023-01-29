<template>
  <div class="card" style="width: 18rem;">
    <img class="card-img-top" :src="`src/assets/images/${Image}`" alt="Card image cap"/>
    <div class="card-body">
        <h5 class="card-title">{{Name}}</h5>
        <p class="card-text">{{Comment}}</p>
        <span>{{Price}}€</span>
    </div>
</div>
</template>

<script>
export default{
data() {
  return {
      Id : 1,
       Name : "Card title",
       Image : "Product1.png",
       Comment : `Some quick example text to build on the card title 
                  and make up the bulk of the card's content.`,
       Price : 109.99
      }
  }
}
</script>


