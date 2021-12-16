<template>
  <button @click="handleClick">Delete</button>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  props: ["id"],
  computed: {
    ...mapGetters(["allTrays", "selectTray"]),
  },
  methods: {
    ...mapActions(["deleteTray"]),
    ...mapMutations(["setSelectTray", "resetSelectTray"]),
    handleClick: async function () {
      await this.deleteTray(this.id);
      if (this.allTrays.length > 0) {
        this.setSelectTray(this.allTrays[this.allTrays.length - 1]);
      } else {
        this.resetSelectTray();
      }
    },
  },
};
</script>

<style>
</style>