<template>
    <div id="app">
        <el-container class="main-box">
            <el-header class="header">Header</el-header>
            <el-container>
                <el-aside width="200px" class="aside">
                    <el-menu :default-openeds="['1', '3']">
                        <el-submenu index="1">
                            <template slot="title"><i class="el-icon-message"></i>导航一</template>
                            <el-menu-item-group>
                                <template slot="title">分组一</template>
                                <el-menu-item index="1-1">选项1</el-menu-item>
                                <el-menu-item index="1-2">选项2</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                                <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="1-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="1-4-1">选项4-1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                            <el-menu-item-group>
                                <template slot="title">分组一</template>
                                <el-menu-item index="2-1">选项1</el-menu-item>
                                <el-menu-item index="2-2">选项2</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                                <el-menu-item index="2-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="2-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="2-4-1">选项4-1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-submenu index="3">
                            <template slot="title"><i class="el-icon-setting"></i>导航三</template>
                            <el-menu-item-group>
                                <template slot="title">分组一</template>
                                <el-menu-item index="3-1">选项1</el-menu-item>
                                <el-menu-item index="3-2">选项2</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                                <el-menu-item index="3-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="3-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="3-4-1">选项4-1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                    </el-menu>
                </el-aside>
                <el-container>
                    <el-main class="main">
                        <router-view></router-view>
                    </el-main>
                    <el-footer class="fotter">Footer</el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    name: "app",
    components: {}
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
