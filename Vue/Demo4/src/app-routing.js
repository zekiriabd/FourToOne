import {createRouter, createWebHistory} from "vue-router";
import Orderlist   from "./pages/OrderList/OrderList.vue";
import ProductList from "./pages/ProductList/ProductList.vue";
import ErrorMessage from "./components/errormessage.vue";
import ProductEdit from "./pages/ProductEdit/productedit.vue";
const routes = [
    {path:"/",name:"productList",component:ProductList},   
    {path:"/orderlist/:ids",name:"orderlist",component:Orderlist},
    {path:"/productedit", name:"",component:ProductEdit},
    {path:"/:catcAll(.*)",component:ErrorMessage}
];
const router = createRouter({history: createWebHistory(),routes});
export default router;