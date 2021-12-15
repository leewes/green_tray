<template>
  <div>
    <div class="cell" @click="handleClick" :style="bgc">{{ name }}</div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: "Cell",
  props: ["col", "row"],
  data() {
    return {
      name: "No Seed",
      bgc: {
        backgroundColor: "gray",
      },
    };
  },
  methods: {
    ...mapMutations(["addCellData"]),
    handleClick: function () {
      this.bgc.backgroundColor = "green";
    },
  },
  created() {
    let data = {
      [this.row]: {
        [this.col] : {
          name: this.name,
          color: this.bgc.backgroundColor,
        }
      } 
    };
    this.addCellData(data);
  }
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
