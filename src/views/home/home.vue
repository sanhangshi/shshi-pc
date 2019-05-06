<template>
    <div id='homePage'>
        <shstitle></shstitle>
        <headBar></headBar>
    </div>
</template>

<script>
import shstitle from '../../components/Title'
import headBar from '../../components/HeadBar'

export default {
    name: "Home",
    components: {
        shstitle,
        headBar
    }
}
</script>

<style scoped>
#homePage {
    background-image: url('../../../image/-4ada3Q2f-eweaXkZ5nT3cS1jk-tq.png');
    height: 980px;
}
</style>

