<template>
  <div>
    <div class="cell" @click="handleClick" :style="bgc">{{ data.name }}</div>
  </div>
</template>

<script>
export default {
  name: "Cell",
  props: ["col", "row", "data"],
  data() {
    return {
      bgc: {
        backgroundColor: this.data.color,
      },
    };
  },
  methods: {
    handleClick: function () {
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
  user-select: none;
  text-align: center;
}
</style>
