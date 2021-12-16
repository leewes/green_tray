<template>
  <button class="save" @click="handleClick">Save</button>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "Save",
  computed: mapGetters(["selectTray", "allTrays"]),
  methods: {
    ...mapActions(["postTray", "fetchTrays", "patchTray"]),
    ...mapMutations(["setSelectTray"]),
    async handleClick() {
      const data = {
          ...this.selectTray,
          cellData: JSON.stringify(this.selectTray.cellData),
        };
      if (this.selectTray.id !== undefined) {
        await this.patchTray(data);
      } else {
        await this.postTray(data);
        this.setSelectTray(this.allTrays[this.allTrays.length - 1]);
      }
    },
  },
};
</script>

<style>
</style>