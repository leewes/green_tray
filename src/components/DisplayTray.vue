<template>
  <div class="display-tray">
    <div v-if="Object.keys(selectTray).length === 0">
      <div v-for="i in row" class="wrapper" :key="i">
        <div v-for="j in column" :key="j">
          <NewCell :col="j" :row="i" />
        </div>
      </div>
    </div>
    <div v-else>
      <div v-for="(items, row) in selectCellData" class="wrapper" :key="row">
        <div v-for="(data, col) in items" :key="col">
          <LoadCell :col="col" :row="row" :data="data" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import LoadCell from "./LoadCell";
import NewCell from "./NewCell";

export default {
  name: "DisplayTray",
  components: {
    LoadCell,
    NewCell,
  },
  data: () => ({
    row: 4,
    column: 8,
  }),
  computed: mapGetters(["selectTray", "selectCellData"]),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
