<template>
  <div>
    <Save />
    <Load />
    <button class="reset" @click="handleClick">Reset</button>
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
    ...mapGetters(["getRow", "getColumn", "selectTray", "allTrays"]),
  },
  methods: {
    ...mapActions(["fetchTrays"]),
    ...mapMutations([
      "resetSelectTray",
      "setRow",
      "setColumn",
      "setSelectTray",
    ]),
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