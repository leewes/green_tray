<template>
  <div class="cell" @click="click" :style="bgc">{{`Col: ${col}`}}</div>
</template>

<script>

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
.cell {
  display: flex;
  cursor: pointer;
}
</style>
