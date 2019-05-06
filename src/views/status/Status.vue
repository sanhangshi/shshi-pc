<template>
    <div class="root">
        <div class="top-bg"></div>
        <el-card class="box-card">
           <div v-for="item in 30" :key="item">Status{{item}}</div>
        </el-card>
    </div>
</template>

<script>
export default {
    name: "Status",
    props: {
        msg: String
    },
    data: () => ({
    }),
    mounted() {
        
    },
    methods: {
        
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.root{
    min-width: 100%;
    min-height: 100vh;
    display: inline-block;
    text-align: center;
}
.top-bg{
    background-color: #87CEEB;
    height: 300px;
}
.box-card{
    margin-top: -50px;
    width: 50%;
    display: inline-block;
    text-align: left;
}
</style>
