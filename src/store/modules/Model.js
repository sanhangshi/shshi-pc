/*
 * @Author: Yun.Lei
 * @Date: 2019-04-25 16:33:11
 * @Last Modified by: Yun.Lei
 * @Last Modified time: 2019-04-25 18:23:37
 */
"use strict";
import cookie from "js-cookie";
import Api from "@api/Api";

//state
const state = {
    sidebar: {
        opened: !+cookie.get("sidebarStatus"),
        withoutAnimation: false
    },
    device: "desktop",
};

//getters
const getters = {
    getSidebar: state => {
        return state.sidebar;
    },
};

//actions
const actions = {
    CloseSideBar({ commit }, { withoutAnimation }) {
        commit("CLOSE_SIDEBAR", withoutAnimation);
    },
    ToggleDevice({ commit }, device) {
        commit("TOGGLE_DEVICE", device);
    },
    ToggleSideBar: ({ commit }) => {
        commit("TOGGLE_SIDEBAR");
    },
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
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
        cookie.set("sidebarStatus", 1);
        state.sidebar.opened = false;
        state.sidebar.withoutAnimation = withoutAnimation;
    },
    TOGGLE_DEVICE: (state, device) => {
        state.device = device;
    },
    TOGGLE_SIDEBAR: state => {
        if (state.sidebar.opened) {
            cookie.set("sidebarStatus", 1);
        } else {
            cookie.set("sidebarStatus", 0);
        }
        state.sidebar.opened = !state.sidebar.opened;
        state.sidebar.withoutAnimation = false;
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};
