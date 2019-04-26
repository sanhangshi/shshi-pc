/*
 * @Author: Yun.Lei
 * @Date: 2019-04-25 16:33:11
 * @Last Modified by: Yun.Lei
 * @Last Modified time: 2019-04-26 14:34:00
 */
"use strict";
import cookie from "js-cookie";
import Api from "@api/Api";

//state
const state = {
    
};

//getters
const getters = {
    
};

//actions
const actions = {
    getArticleList({}, page) {
        return new Promise((resolve, reject) => {
            Api.IGetArticleList(
                page,
                success => {
                    resolve(success);
                },
                failure => {
                    reject(failure);
                }
            );
        });
    },
    userLogin({}, params) {
        return new Promise((resolve, reject) => {
            Api.IUserLogin(
                params,
                success => {
                    resolve(success);
                },
                failure => {
                    reject(failure);
                }
            );
        });
    }
};

//mutations
const mutations = {
    
};

export default {
    state,
    getters,
    actions,
    mutations
};
