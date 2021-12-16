<template>
  <div id="app">
    Welcome to Green Tray App!
    <div id="container">
      <Sidebar />
      <DisplayTray />
    </div>
    <Menu />
  </div>
</template>

<script>
import DisplayTray from "./components/DisplayTray.vue";
import Menu from "./components/Menu.vue";
import Sidebar from "./components/Sidebar.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    DisplayTray,
    Menu,
    Sidebar,
  },
  computed: mapGetters(["selectTray"]),
};
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
#container {
  display: flex;
  flex-direction: row;
}
Sidebar {
  order: 1;
  position: fixed;
  overflow-y: auto;
  position: relative;
  transition: width 0.2s;
  flex-shrink: 0;
}
</style>
