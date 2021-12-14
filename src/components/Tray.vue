<template>
  <div class="tray">
    <div v-for="i in height" class="wrapper">
      <div v-for="j in length">
      <Cell :col="j" :row="i"/>
      </div>
    </div>
  </div>
</template>

<script>
import Cell from "./Cell";

export default {
  name: "Tray",
  components: {
    Cell,
  },
  data: () => ({
    height: 4,
    length: 8,
  }),
  
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
  background: gray;
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
