<template>
    <div class="hello">
        <el-table :data="tableData" style="width: 100%" border>
            <el-table-column prop="title" label="title" >
            </el-table-column>
            <el-table-column prop="author" label="author">
            </el-table-column>
            <el-table-column prop="superChapterName" label="superChapterName">
            </el-table-column>
            <el-table-column prop="chapterName" label="chapterName">
            </el-table-column>
            <el-table-column prop="niceDate" label="createTime">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    props: {
        msg: String
    },
    data: () => ({
        tableData: []
    }),
    mounted() {
        this.getList();
        this.login();
    },
    methods: {
        getList() {
            this.$store
                .dispatch("getArticleList", 0)
                .then(res => {
                  console.log(res);
                  this.tableData = res.datas;
                })
                .catch(e => {});
        },
        login() {
            this.$store
                .dispatch("userLogin", {
                    username: "shstest",
                    password: "123456"
                })
                .then(res => {})
                .catch(e => {});
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
