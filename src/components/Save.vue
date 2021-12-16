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
    async handleClick() {
      const data = {
        name: this.selectTray.name,
        cellData: JSON.stringify(this.selectTray.cellData),
      };
      if (this.selectTray.id !== undefined) {
        await this.patch(data);
      } else {
        await this.postTray(data);
      }
    },
  },
};
</script>

<style>
</style>