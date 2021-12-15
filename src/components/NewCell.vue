<template>
  <div>
    <div class="cell" @click="handleClick" :style="bgc">{{ col }}</div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
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
    ...mapMutations(["setSelectTray"]),
    handleClick: function () {
      this.bgc.backgroundColor = "green";
    },
  },
  created() {
    let data = {
      cellData: {
        [this.row]: {
          [this.col]: {
            color: this.bgc.backgroundColor,
          },
        },
      },
    };
    this.setSelectTray(data);
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
