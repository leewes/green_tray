<template>
  <div class="tray" @click="loadTray">{{data.name}}</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Tray",
  props: ["data"],
  methods: {
    ...mapActions(["loadSelectTray"]),
    loadTray() {
        console.log(this.data)
        this.loadSelectTray(this.data);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tray {
  cursor: pointer;
  user-select: none;
  text-align: center;
}
</style>
