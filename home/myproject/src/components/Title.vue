<template>
    <a id="shsTitle" class="btn btn-default">
        {{ name }}
    </a>
</template>

<script>
export default {
    name: 'shstitle',
    data () {
        return {
            name: '三行诗'
        }
    }
}
</script>

<style scoped>
#shsTitle {
    font-size: 30px;
    color: skyblue;
}
</style>
