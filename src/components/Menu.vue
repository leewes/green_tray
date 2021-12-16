<template>
  <div class="menu">
    <label>
      Seed Name:
      <input :placeholder="getCell.name" />
    </label>
    <label>
      Seed Color:
      <input @change="colorChange" :placeholder="getCell.color" />
    </label>
    <div class="container">
      <Save />
      <button
        v-if="selectTray.id !== undefined"
        class="revert"
        @click="handleClick"
      >
        Reset
      </button>
      <button v-else @click="handleResetClick">Reset</button>
    </div>
  </div>
</template>

<script>
import Save from "./Save.vue";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  components: { Save },
  name: "Menu",
  computed: {
    ...mapGetters([
      "selectTray",
      "allTrays",
      "selectCellData",
      "getRow",
      "getCell",
      "getLocation",
    ]),
  },
  methods: {
    ...mapActions(["fetchTrays"]),
    ...mapMutations(["setSelectTray", "setRow", "setCell", "addCellData"]),
    handleClick: async function () {
      if (this.selectTray.id !== undefined) {
        await this.fetchTrays();
        this.setSelectTray(
          this.allTrays.find((tray) => tray.id === this.selectTray.id)
        );
      }
    },
    handleResetClick: async function () {
      const currRow = this.getRow;
      await this.setRow(0);
      this.setRow(currRow);
    },
    colorChange: function (e) {
      if (e.target.value.length !== 0) {
        this.setCell({ ...this.getCell, color: e.target.value });
        const data = {
          [this.getLocation[0]]: {
            [this.getLocation[1]]: this.getCell,
          }
        };
        this.addCellData(data);
      }
    },
  },
};
</script>

<style>
.menu {
  width: 70%;
  margin: auto;
  padding-top: 2%;
  display: flex;
  justify-content: center;
  gap: 5%;
  gap: 5%;
}
.container {
  display: flex;
  flex-direction: row;
  gap: 5%;
}
</style>