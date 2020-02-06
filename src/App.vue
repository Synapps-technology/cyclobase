<template>
  <div id="app">
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  name: 'App',
  components: {NavBar}
}
</script>

<style>
  @import url('./style/style.css');
</style>
