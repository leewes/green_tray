<template>
  <div class="display-tray">
    <header>
      <h5>Tray Name:</h5>
      <input :placeholder="selectTray.name" @change="handleChange" />
    </header>

    <div v-if="selectTray.id === undefined">
      <div v-for="row in getRow" class="wrapper" :key="row">
        <div v-for="col in getColumn" :key="col">
          <NewCell :row="row" :col="col" />
        </div>
      </div>
    </div>
    <div v-else>
      <div v-for="(items, row) in selectCellData" class="wrapper" :key="row">
        <div v-for="(data, col) in items" :key="col">
          <LoadCell :col="col" :row="row" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import LoadCell from "./LoadCell";
import NewCell from "./NewCell";

export default {
  name: "DisplayTray",
  components: {
    LoadCell,
    NewCell,
  },
  computed: mapGetters([
    "selectTray",
    "selectCellData",
    "getRow",
    "getColumn",
    "allTrays",
  ]),
  methods: {
    ...mapMutations(["setSelectTray"]),
    handleChange(e) {
      if (e.target.value.length !== 0) {
        this.setSelectTray({ name: e.target.value });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  display: flex;
  align-items: center;
  gap: 2%;
  user-select: none;
}

h5 {
}

.display-tray {
  width: 85%;
  height: 100%;
  margin: auto;
  margin-top: 0;
}
.wrapper {
  display: flex;
  cursor: pointer;
}

.wrapper > div {
  font-size: 4vh;
  color: white;
  background: sienna;
  margin: 0.1em;
  padding: 0.3em;
  border-radius: 3px;
  flex: 1;
}
</style>
