/*
 * @Author: Yun.Lei 
 * @Date: 2019-04-25 17:51:15 
 * @Last Modified by: Yun.Lei
 * @Last Modified time: 2019-04-26 13:19:29
 */
const Index = () => import("@src/views/index/Index.vue");

const routerConfig = [
    {
        path: "/",
        component: Index,
        name: "/",
        meta: {
            title: "首页",
            voice: false
        },
    },
];

export default routerConfig;