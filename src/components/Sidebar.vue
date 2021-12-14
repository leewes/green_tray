<template>
  <div>
    <Save />
    <Load />
  </div>
</template>

<script>
import Save from "./Save.vue";
import Load from "./Load.vue";

export default {
  name: "Sidebar",
  components: {
    Save,
    Load,
  },
};
</script>

<style>
</style>