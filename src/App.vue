<template>
  <div id="app">
    Welcome to Green Tray App!
    <Tray />
  </div>
</template>

<script>
import Tray from './components/Tray.vue'

export default {
  name: 'App',
  components: {
    Tray
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
