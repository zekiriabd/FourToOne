<style src="./ProductList.css"></style>
<template src="./ProductList.html"></template>

<script setup>
import ProductPage from '../../components/Product/Product.vue'
</script>

<script>
export default{

  data() {
    return {
      ids:[],
      products :[],
     /* {
            Id : 1,
            Name : "ASUS Rog",
            Image : "https://media.inmac-wstore.com/ImagesPortal/FR/catalogue/Product/600/7278417_1_6_92b0f2b6-034d-4d2c-8b38-a55e0c7e9da1.jpg",
            Comment : "Le PC Portable Gaming ASUS ROG STRIX G17 vous permettra de jouer dans les meilleures conditions à vos jeux PC favoris grâce à des composants ultra-performants, un écran 144 Hz et une conception haut de gamme qui ne laisse rien au hasard.",
            Price : 12354.00,
            Discount : 50,
            LikeCount : 0
            },
            {
            Id : 2,
            Name : "ASUS Rog",
            Image : "https://m.media-amazon.com/images/I/5107xCFAVpL._AC_SS450_.jpg",
            Comment : "Le PC Portable Gaming ASUS ROG STRIX G17 vous permettra de jouer dans les meilleures conditions à vos jeux PC favoris grâce à des composants ultra-performants, un écran 144 Hz et une conception haut de gamme qui ne laisse rien au hasard.",
            Price : 12354.00,
            Discount : 50,
            LikeCount : 0
            },
            {
            Id : 3,
            Name : "ASUS Rog",
            Image : "https://www.cdiscount.com/pdt2/9/6/2/1/300x300/asu3760302523962/rw/asus-notebook-x409fa-bv606t-15-core-i3-2-1-ghz.jpg",
            Comment :"Le PC Portable Gaming ASUS ROG STRIX G17 vous permettra de jouer dans les meilleures conditions à vos jeux PC favoris grâce à des composants ultra-performants, un écran 144 Hz et une conception haut de gamme qui ne laisse rien au hasard.",
            Price : 12354.00,
            Discount : 50,
            LikeCount : 0
            },
            {
            Id : 4,
            Name : "ASUS Rog",
            Image : "https://www.cdiscount.com/pdt2/9/6/2/1/300x300/asu3760302523962/rw/asus-notebook-x409fa-bv606t-15-core-i3-2-1-ghz.jpg",
            Comment :"Le PC Portable Gaming ASUS ROG STRIX G17 vous permettra de jouer dans les meilleures conditions à vos jeux PC favoris grâce à des composants ultra-performants, un écran 144 Hz et une conception haut de gamme qui ne laisse rien au hasard.",
            Price : 12354.00,
            Discount : 50,
            LikeCount : 0
            },
            {
            Id : 5,
            Name : "ASUS Rog",
            Image : "https://www.cdiscount.com/pdt2/9/6/2/1/300x300/asu3760302523962/rw/asus-notebook-x409fa-bv606t-15-core-i3-2-1-ghz.jpg",
            Comment : "Le PC Portable Gaming ASUS ROG STRIX G17 vous permettra de jouer dans les meilleures conditions à vos jeux PC favoris grâce à des composants ultra-performants, un écran 144 Hz et une conception haut de gamme qui ne laisse rien au hasard.",
            Price : 12354.00,
            Discount : 50,
            LikeCount : 0
            }
      ]*/
    }
  },
  methods: {
    AddProductToIds(id) {
      this.ids.push(id);
      }
    },  
    beforeMount(){    
      let strproducts = localStorage.getItem('data');
      
      if (!strproducts) {      
         strproducts = `[{
  "Id": 1,
  "Name": "ASUS Rog",
  "Image": "https://www.cdiscount.com/pdt2/9/6/2/1/300x300/asu3760302523962/rw/asus-notebook-x409fa-bv606t-15-core-i3-2-1-ghz.jpg",
  "Comment": "Le PC Portable Gaming ASUS ROG STRIX G17 vous permettra de jouer dans les meilleures conditions à vos jeux PC favoris grâce à des composants ultra-performants, un écran 144 Hz et une conception haut de gamme qui ne laisse rien au hasard.",
  "Price": 12354.00,
  "Discount": 50
},
{
  "Id": 2,
  "Name": "ASUS22222",
  "Image": "https://m.media-amazon.com/images/I/5107xCFAVpL._AC_SS450_.jpg",
  "Comment": "Le PC Portable Gaming ASUS ROG STRIX G17 vous permettra de jouer dans les meilleures conditions à vos jeux PC favoris grâce à des composants ultra-performants, un écran 144 Hz et une conception haut de gamme qui ne laisse rien au hasard.",
  "Price": 1754.00,
  "Discount": 50
},
{
  "Id": 3,
  "Name": "ASUS33333",
  "Image": "https://www.cdiscount.com/pdt2/9/6/2/1/300x300/asu3760302523962/rw/asus-notebook-x409fa-bv606t-15-core-i3-2-1-ghz.jpg",
  "Comment": "Le PC Portable Gaming ASUS ROG STRIX G17 vous permettra de jouer dans les meilleures conditions à vos jeux PC favoris grâce à des composants ultra-performants, un écran 144 Hz et une conception haut de gamme qui ne laisse rien au hasard.",
  "Price": 12994.0,
  "Discount": 50
}]`;
        
        localStorage.setItem('data',strproducts);
      }
      
      this.products = JSON.parse(strproducts);
    }
  
}
</script>


