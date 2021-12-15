<template>
  <button class="save" @click="handleClick">Save</button>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "Save",
  computed: mapGetters(["selectTray", "allTrays"]),
  methods: {
    ...mapMutations(["setSelectTray"]),
    ...mapActions(["postTray", "fetchTrays"]),
    async handleClick() {
      if (this.selectTray.id !== undefined) {
      } else {
        const data = {
          name: this.selectTray.name,
          cellData: JSON.stringify(this.selectTray.cellData),
        };
        await this.postTray(data);
        this.setSelectTray(this.allTrays[this.allTrays.length - 1]);
      }
    },
  },
};
</script>

<style>
</style>