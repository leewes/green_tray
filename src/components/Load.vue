<template>
  <div>
    LOAD!
    <div v-for="tray in allTrays" :key="tray.id">
      {{ tray.name }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Load",
  computed: mapGetters(["allTrays"]),
};
</script>

<style></style>
