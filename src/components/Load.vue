<template>
  <div>
    <header>Load</header>
    <div v-for="tray in allTrays" :key="tray.id" >
      <Tray :data="tray"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Tray from "./Tray";

export default {
  name: "Load",
  components: {
      Tray,
  },
  computed: mapGetters(["allTrays"]),
  methods: {
    ...mapActions(["fetchTrays"]),
  },
  created() {
    this.fetchTrays();
  },
};
</script>

<style>
.tray {
  user-select: none;
  cursor: pointer;
}
</style>
