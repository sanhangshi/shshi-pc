/*
 * @Author: Yun.Lei 
 * @Date: 2019-04-25 16:27:46 
 * @Last Modified by: Yun.Lei
 * @Last Modified time: 2019-04-25 17:00:30
 */
"use strict";
import Vue from "vue";
import Vuex from "vuex";
import Model from "./modules/Model";
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        Model
    }
});