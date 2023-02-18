import {createRouter, createWebHistory} from "vue-router";
import Orderlist   from "./pages/OrderList/OrderList.vue";
import ProductList from "./pages/ProductList/ProductList.vue";
import ErrorMessage from "./components/errormessage.vue";
const routes = [
    {path:"/",name:"productList",component:ProductList},   
    {path:"/orderlist/:ids",name:"orderlist",component:Orderlist},
    {
        path:"/:catcAll(.*)",component:ErrorMessage
    }
];
const router = createRouter({history: createWebHistory(),routes});
export default router;