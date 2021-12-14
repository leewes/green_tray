<template>
  <div>
    <h3>Loaded Trays</h3>
    <div v-for="tray in allTrays" :key="tray.id">
      <Tray :data="tray" />
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
h3 {
  user-select: none;
}
.tray {
  user-select: none;
  cursor: pointer;
}
</style>
