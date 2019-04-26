/*
 * @Author: Yun.Lei 
 * @Date: 2019-04-25 16:01:07 
 * @Last Modified by: Yun.Lei
 * @Last Modified time: 2019-04-25 17:45:27
 */
"use strict";
import axios from "axios";
import qs from "qs";
// axios 配置
// axios.defaults.timeout = 5000;
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8";
axios.defaults.headers.get["Content-Type"] = "application/json;charset=UTF-8";
axios.defaults.headers.post["X-Tags"] = "web-client";
// axios.defaults.baseURL = config.BASE_URL;
// POST传参序列化
axios.interceptors.request.use(
    config => {
        if (config.method === "post") {
            config.data = qs.stringify(config.data);
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
// 返回状态判断()
axios.interceptors.response.use(
    res => {
        return res;
    },
    error => {
        return Promise.reject(error);
    }
);

function getCommonParams() {
    return {};
}

export default {
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
};
