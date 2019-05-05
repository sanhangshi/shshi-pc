<template>
  <div id="body">
    <shstitle></shstitle>
    <headBar></headBar>
    <div id="app">
      <img src="./assets/logo.png">
      <router-view/>
    </div>
  </div>
</template>

<script>

import shstitle from './components/Title';
import headBar from './components/HeadBar'

export default {
  name: 'App',
  components: {
    shstitle,
    headBar
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
}
#body {
  height: 1080px;
  width: 100%;
  background-image: url('../../../image/-4ada3Q2f-eweaXkZ5nT3cS1jk-tq.png');
}
</style>
