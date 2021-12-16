<template>
  <div>
    <h3>Loaded Trays</h3>
    <h5 v-if="allTrays.length < 1">No trays found in database.</h5>
    <div v-for="tray in allTrays" :key="tray.id">
      <div class="tray-list">
        <TrayName :data="tray" />
        <Delete :id="tray.id" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Delete from "./Delete.vue";
import TrayName from "./TrayName";

export default {
  name: "Load",
  components: {
    TrayName,
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

.tray-list > div {
  display: inline;
}

.tray-list:hover {
  background-color: yellow;
}

TrayName {
  user-select: none;
  cursor: pointer;
}
</style>
