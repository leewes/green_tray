<template>
  <div>
    <div
      class="cell"
      @click="handleClick"
      :style="{ backgroundColor: this.selectCellData[row][col].color }"
    >
      {{ selectCellData[row][col].name }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Cell",
  props: ["col", "row"],
  computed: {
    ...mapGetters(["selectCellData"]),
  },
  methods: {
    ...mapMutations(["addCellData", "setCell"]),
    handleClick: function () {
      this.setCell({
        name: this.selectCellData[this.row][this.col].name,
        color: this.selectCellData[this.row][this.col].color,
      });
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
.cell:active {
  border: gray;
  border-style: ridge;
}
</style>
