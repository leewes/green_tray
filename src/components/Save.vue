<template>
  <button class="save" @click="handleClick">Save</button>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Save",
  computed: mapGetters(["selectTray", "allTrays"]),
  methods: {
    ...mapActions(["postTray", "fetchTrays"]),
    handleClick() {
      if (this.selectTray.id !== undefined) {
      } else {
        const data = {
          name: this.selectTray.name,
          cellData: JSON.stringify(this.selectTray.cellData),
        };
        this.postTray(data);
      }
      this.fetchTrays();
    },
  },
};
</script>

<style>
</style>