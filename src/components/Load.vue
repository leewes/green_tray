<template>
  <div>
    <h3>Loaded Trays</h3>
    <h5 v-if="allTrays.length < 1">No trays found in database.</h5>
    <button @click="handleClick">Create a new tray</button>
    <div v-for="tray in allTrays" :key="tray.id">
      <div class="tray-list">
        <TrayName :data="tray" />
        <Delete :id="tray.id" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import Delete from "./Delete.vue";
import TrayName from "./TrayName";

export default {
  name: "Load",
  components: {
    TrayName,
    Delete,
  },
  computed: mapGetters(["allTrays", "selectTray", "getRow"]),
  methods: {
    ...mapActions(["fetchTrays"]),
    ...mapMutations(["setRow", "resetSelectTray"]),
    handleClick: async function () {
      if (this.selectTray.id !== undefined) {
        this.resetSelectTray();
      } else {
        const currRow = this.getRow;
        await this.setRow(0);
        this.setRow(currRow);
      }
    },
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
