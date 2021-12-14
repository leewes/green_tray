<template>
  <div class="wrapper" @click="click" :style="bgc">{{row}}{{col}}</div>
</template>

<script>
import Cell from "./Cell";

export default {
  name: "Cell",
  props: ["col", "row"],
  data() {
    return {
      bgc: {
        backgroundColor: "gray",
      },
    };
  },
  methods: {
    click: function () {
      this.bgc.backgroundColor = "green";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  display: flex;
  cursor: pointer;
}
</style>
