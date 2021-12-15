<template>
  <div class="tray" @click="handleClick">{{data.name}}</div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Tray",
  props: ["data"],
  methods: {
    ...mapMutations(["setSelectTray"]),
    handleClick() {
        const parseData = {...this.data, cellData: JSON.parse(this.data.cellData)}
        this.setSelectTray(parseData);
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
