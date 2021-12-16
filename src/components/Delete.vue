<template>
  <button @click="handleClick">Delete</button>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["id"],
  methods: {
    ...mapActions(["deleteTray"]),
    handleClick: function () {
      this.deleteTray(this.id);
    },
  },
};
</script>

<style>
</style>