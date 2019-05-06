<template>
    <div id="headBar" class="btn btn-default">
        <el-button type="text" class="option-button"  @click="tabClick('/login')">登录</el-button>&emsp;
        <el-button type="text" class="option-button"  @click="tabClick('/add')">添加</el-button>&emsp;
        <el-button type="text" class="option-button"  @click="tabClick('/status')">状态</el-button>&emsp;
        <el-button type="text" class="option-button"  @click="tabClick('/about')">关于</el-button>&emsp;
    </div>
</template>

<script>
export default {
    name: 'headBar',
    methods:{
        tabClick(path){
            this.$router.push(
                {
                    path:path
                }
            )
        }
    }
}
</script>

<style scoped>
#headBar {
    display: inline-flex;
    float: right;
}

.option-button {
    color: #fff;
}
</style>
