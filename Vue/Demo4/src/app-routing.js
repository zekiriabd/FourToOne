import {createRouter, createWebHistory} from "vue-router";
import Orderlist   from "./pages/OrderList/OrderList.vue";
import ProductList from "./pages/ProductList/ProductList.vue";
const routes = [
    {path:"/",name:"productList",component:ProductList},   
    {path:"/orderlist",name:"orderlist",component:Orderlist}    
];
const router = createRouter({history: createWebHistory(),routes});
export default router;