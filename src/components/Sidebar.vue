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
import { mapMutations } from "vuex";

export default {
  name: "Sidebar",
  components: {
    Save,
    Load,
  },
  methods: {
    ...mapMutations(["resetSelectTray"]),
    handleClick() {
      this.resetSelectTray();
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