/*
 * @Author: Yun.Lei 
 * @Date: 2019-04-25 17:51:15 
 * @Last Modified by: Yun.Lei
 * @Last Modified time: 2019-04-26 13:19:29
 */
const Index = () => import("@src/views/index/Index.vue");
const Home = () => import("@src/views/home/home.vue");
const About = () => import("@src/views/about/About.vue");
const Login = () => import("@src/views/login/Login.vue");
const Add = () => import("@src/views/add/Add.vue");
const Status = () => import("@src/views/status/Status.vue");

const routerConfig = [
    {
        path: "/",
        component: Home,
        name: "home",
        meta: {
            title: "首页",
            voice: false
        },
    },
    {
        path: "/shs",
        component: Index,
        name: "shs",
        meta: {
            title: "三行诗",
            voice: false
        }
    },
    {
        path: "/about",
        component: About,
        name: "about",
        meta: {
            title: "关于-三行诗",
            voice: false
        }
    },
    {
        path: "/login",
        component: Login,
        name: "login",
        meta: {
            title: "登录-三行诗",
            voice: false
        }
    },
    {
        path: "/add",
        component: Add,
        name: "add",
        meta: {
            title: "添加-三行诗",
            voice: false
        }
    },
    {
        path: "/status",
        component: Status,
        name: "status",
        meta: {
            title: "状态-三行诗",
            voice: false
        }
    },
];

export default routerConfig;