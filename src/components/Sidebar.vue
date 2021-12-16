<template>
  <div>
    <Save />
    <Load />
    <button v-if="allTrays.length !== 0" class="revert" @click="handleClick">Revert</button>
  </div>
</template>

<script>
import Save from "./Save.vue";
import Load from "./Load.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "Sidebar",
  components: {
    Save,
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
.reset {
  cursor: pointer;
  user-select: none;
}
</style>