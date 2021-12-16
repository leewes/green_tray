<template>
  <div class="sidebar">
    <h5>Currently editing:</h5>
    <h5>{{ selectTray.name }}</h5>
    <Load />
    <button v-if="allTrays.length !== 0" class="revert" @click="handleClick">
      Revert Changes
    </button>
  </div>
</template>

<script>
import Load from "./Load.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "Sidebar",
  components: {
    Load,
  },
  computed: {
    ...mapGetters(["selectTray", "allTrays"]),
  },
  methods: {
    ...mapActions(["fetchTrays"]),
    ...mapMutations(["setSelectTray"]),
    async handleClick() {
      if (this.selectTray.id !== undefined) {
        await this.fetchTrays();
        this.setSelectTray(
          this.allTrays.find((tray) => tray.id === this.selectTray.id)
        );
      }
    },
  },
};
</script>

<style>
.sidebar {
  padding-left: 0.5%;
  text-align: center;
  width: 150px;
  padding: 0;
}
.reset {
  cursor: pointer;
  user-select: none;
}
</style>