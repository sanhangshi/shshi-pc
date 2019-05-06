<template>
    <div id="shsTitle"  >
        <div class="title" @click="titleClick">{{ name }}</div>
    </div>
</template>

<script>
export default {
    name: 'shstitle',
    data () {
        return {
            name: '三行诗'
        }
    },
    methods:{
        titleClick(){
            this.$router.push(
                {
                    path:"/"
                }
            )
        }
    }
}
</script>

<style scoped>
#shsTitle {
    
    
}
.title{
    cursor: pointer;
    font-size: 30px;
    color: #fff;
    display: inline-block;
    width: auto;
}
</style>
