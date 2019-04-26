const path = require("path");
// const config = require("./src/config/config");
function resolve(dir) {
    return path.join(__dirname, dir);
}
let isProduction = process.env.VUE_APP_ENV === "pro";
module.exports = {
    lintOnSave: true,
    chainWebpack: config => {
        config.resolve.alias
            .set("@src", resolve("src"))
            .set("@assets", resolve("src/assets"))
            .set("@components", resolve("src/components"))
            .set("@api", resolve("src/api"))
            .set("@config", resolve("src/config"))
            .set("@common", resolve("src/common"))
            .set("@mixins", resolve("src/mixins"));
    },
    devServer: {
        port: "8903",
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
    }
};
