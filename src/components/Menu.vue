<template>
  <div class="menu">
    <label>
      Seed Name:
      <input />
    </label>
    <label>
      Seed Color:
      <input />
    </label>
    <Save />
  </div>
</template>

<script>
import Save from './Save.vue';

export default {
  components: { Save },
  name: "Menu",
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
</style>