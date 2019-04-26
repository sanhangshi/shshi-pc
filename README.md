# shshi-pc

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### CLI
CLI (@vue/cli) 是一个全局安装的 npm 包，提供了终端里的 vue 命令。它可以通过 vue create 快速创建一个新项目的脚手架，或者直接通过 vue serve 构建新想法的原型。你也可以通过 vue ui 通过一套图形化界面管理你的所有项目。
### 安装
1、Node 版本要求

Vue CLI 需要 Node.js 8.9 或更高版本 (推荐 8.11.0+)。你可以使用 nvm 或 nvm-windows在同一台电脑中管理多个 Node 版本。

2、安装

npm install -g @vue/cli  全局安装

Vue --version  查看安装版本号

npm install -g @vue/cli-service-global  安装vue server

### 创建项目

1、vue create shshi-pc 创建一个新项目

2、你会被提示选取一个 preset。你可以选默认的包含了基本的 Babel + ESLint 设置的 preset，也可以选“手动选择特性”来选取需要的特性。这个默认的设置非常适合快速创建一个新项目的原型，而手动设置则提供了更多的选项，它们是面向生产的项目更加需要的。

3、等待完成，进入创建好的项目 npm run server 即可预览

### 安装vue组件

1、Cnpm i vue-router -S  安装vue路由

2、Cnpm i vuex -S 安装vuex

### 编辑项目结构
 ![image](https://github.com/sanhangshi/shshi-pc/raw/master/image/1.jpg)
### Vue.config.js

1、vue cli3 可以在项目根目录新建一个vue.config.js文件，像之前的很多繁琐配置，都可以在这个文件里配置啦。官方是这样说的。vue.config.js 是一个可选的配置文件，如果项目的 (和 package.json 同级的) 根目录中存在这个文件，那么它会被 @vue/cli-service 自动加载。你也可以使用 package.json 中的 vue 字段，但是注意这种写法需要你严格遵照 JSON 的格式来写。

2、端口号
```
port: "8903",
```
3、代理解决跨域问题
```javascript
proxy: {
	"/api": {
		target: "https://www.wanandroid.com/",
		ws: true,
		changeOrigin: true,
		pathRewrite: {
			"^/api": "" // rewrite path
		}
	},
}
```
### BaseApi.js  网络请求

1、安装axios  cnpm i axios -S

2、配置请求基础属性

3、封装get和post
```javascript
post(url, params = {}) {
	return new Promise((resolve, reject) => {
		axios
			.post(url, { ...getCommonParams(), ...params })
			.then(res => {
				resolve(res);
			})
			.catch(e => {
				reject(e);
			});
	});
},
get(url, params = {}) {
	return new Promise((resolve, reject) => {
		axios
			.get(url, {
				params: { ...getCommonParams(), ...params }
			})
			.then(res => {
				console.log("res:",res.data)
				resolve(res.data);
			})
			.catch(e => {
				reject(e);
			});
	});
}
```
### Main.js
1、配置element和router

```javascript
Vue.use(ElementUI);
Vue.use(Router);
```
2、引入store和router
```javascript
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
```
### App.vue

页面路由入口---开始开发