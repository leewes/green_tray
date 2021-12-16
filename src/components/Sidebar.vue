<template>
  <div class="sidebar">
    <h5>Currently editing:</h5>
    <h5>{{ selectTray.name === "Input Name" ? "" : selectTray.name }}</h5>
    <Load />
  </div>
</template>

<script>
import Load from "./Load.vue";
import { mapGetters } from "vuex";

export default {
  name: "Sidebar",
  components: {
    Load,
  },
  computed: {
    ...mapGetters(["selectTray"]),
  },
};
</script>

<style>
h5 {
  margin: 2%;
}
.sidebar {
  padding-left: 0.5%;
  text-align: center;
  width: 150px;
  padding: 0;
  user-select: none;
}
.reset {
  cursor: pointer;
  user-select: none;
}
</style>