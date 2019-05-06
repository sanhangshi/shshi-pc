<template>
    <div id="app">
        <home></home>
    </div>
</template>

<script>
import home from '../src/views/home/home.vue';
export default {
    name: "app",
    components: {home}
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100%;
}
.header {
    background-color: #ff4444;
}
.main-box {
    height: 930px;
}
.aside {
    background-color: #d3dce6;
}
.main {
    background-color: #fff;
}
.fotter {
    background-color: #f5f5f5;
}
</style>
