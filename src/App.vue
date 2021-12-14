<template>
  <div id="app">
    Welcome to Green Tray App!
    <Sidebar />
    <DisplayTray />
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
</style>
