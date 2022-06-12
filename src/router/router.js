import {createRouter,createWebHistory} from "vue-router";
import VCatalog from "@/components/v-catalog";
import VCard from "@/components/v-card";

const routes = [
    {
        path:'/',
        name:'catalog',
        component:VCatalog
    },
    {
        path:'/card',
        name:'card',
        component:VCard,
        props: true
    }
]
const router = createRouter({
    routes,
    history:createWebHistory(process.env.BASE_URL)
    })

export default router