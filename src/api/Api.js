/*
 * @Author: Yun.Lei 
 * @Date: 2019-04-25 16:20:12 
 * @Last Modified by: Yun.Lei
 * @Last Modified time: 2019-04-25 17:40:32
 */
import BaseApi from "./BaseApi.js";

export default{

    async IGetArticleList(page,success,failure){
        console.log("apiPage:",page);
        const res = await BaseApi.get(`/api/article/list/${page}/json`);
        if(res.errorCode==0){
            success(res.data);
        }else{
            failure(res);
        }
    },
    async IUserLogin(params,success,failure){
        const res = await BaseApi.post(`/api/user/login`,params);
        if(res.errorCode==0){
            success(res.data);
        }else{
            failure(res);
        }
    },
}