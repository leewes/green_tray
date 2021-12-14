<template>
  <div>
    <header>Load</header>
    <div v-for="tray in allTrays" :key="tray.id">
        <div class="tray">{{ tray.name }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Load",
  computed: mapGetters(["allTrays"]),
  methods: {
    ...mapActions(["fetchTrays"]),
  },
  created() {
    this.fetchTrays();
  },
};
</script>

<style>
.tray {
    user-select: none;
    cursor: pointer;
}
</style>
