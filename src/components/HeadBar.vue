<template>
    <div id="headBar" class="btn btn-default">
        <el-button type="text" class="option-button">登录</el-button>&emsp;
        <el-button type="text" class="option-button">添加</el-button>&emsp;
        <el-button type="text" class="option-button">状态</el-button>&emsp;
        <el-button type="text" class="option-button">关于</el-button>&emsp;
    </div>
</template>

<script>
export default {
    name: 'headBar',
}
</script>

<style scoped>
#headBar {
    display: inline-flex;
    float: right;
}

.option-button {
    color: black
}
</style>
