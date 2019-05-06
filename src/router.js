/*
 * @Author: Yun.Lei 
 * @Date: 2019-04-25 17:51:15 
 * @Last Modified by: Yun.Lei
 * @Last Modified time: 2019-04-26 13:19:29
 */
const Index = () => import("@src/views/index/Index.vue");
const Home = () => import("../src/views/home/home.vue");

const routerConfig = [
    {
        path: "/home",
        component: Index,
        name: "home",
        meta: {
            title: "首页",
            voice: false
        },
    },
    {
        path: "/shs",
        component: Home,
        name: "shs",
        meta: {
            title: "三行诗",
            voice: false
        }
    }
];

export default routerConfig;