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
    ...mapMutations(["addCellData", "setCell", "setLocation"]),
    handleClick: function () {
      this.setLocation([this.col, this.row]);
      this.setCell({
        name: this.selectCellData[this.row][this.col].name,
        color: this.selectCellData[this.row][this.col].color,
      });
    },
  },
  created() {
    let data = {
      [this.row]: {
        [this.col]: {
          name: "No Seed",
          color: "gray",
        },
      },
    };
    this.addCellData(data);
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
