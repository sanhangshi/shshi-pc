<template>
  <div id="app">
    <div class="title">
      <shstitle></shstitle>
      <headBar></headBar>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import shstitle from "@components/Title";
import headBar from "@components/HeadBar";
export default {
  name: "app",
  components: {
    shstitle,
    headBar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100%;
}
.title {
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
