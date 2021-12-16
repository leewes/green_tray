<template>
  <div>
    <h3>Loaded Trays</h3>
    <h5 v-if="allTrays.length < 1">No trays found in database.</h5>
    <div v-for="tray in allTrays" :key="tray.id">
      <Tray :data="tray" />
      <Delete :id="tray.id" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Delete from "./Delete.vue";
import Tray from "./Tray";

export default {
  name: "Load",
  components: {
    Tray,
    Delete,
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
