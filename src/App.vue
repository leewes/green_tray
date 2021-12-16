<template>
  <div id="app">
    <h1>Green Tray App</h1>
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
h1 {
 text-align: left;
 background-color: rgb(136, 209, 136);
 border: green;
 border-style: solid;
 padding: 0;
 margin: 0;
 user-select: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

#container {
  margin-top: 0%;
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
