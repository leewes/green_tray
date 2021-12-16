<template>
  <div class="display-tray">
    {{selectTray.name}}
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
  computed: mapGetters(["selectTray", "selectCellData", "getRow", "getColumn"]),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.display-tray {
  width: 85%;
  height: 100%;
  margin: auto;
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
