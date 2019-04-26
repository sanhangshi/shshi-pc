/*
 * @Author: Yun.Lei 
 * @Date: 2019-04-25 17:51:15 
 * @Last Modified by: Yun.Lei
 * @Last Modified time: 2019-04-25 18:37:45
 */
const HolloWorld = () => import("@src/views/index/HelloWorld.vue");

const routerConfig = [
    {
        path: "/",
        component: HolloWorld,
        name: "/",
        meta: {
            title: "首页",
            icon: "iconfont iconworkbench",
            voice: false
        },
    },
];

export default routerConfig;