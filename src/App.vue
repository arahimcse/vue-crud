<script setup>
import { RouterView} from 'vue-router'
import Login from './components/Login.vue';
</script>
<template>
  <section class="flex w-full">
    <RouterView />
  </section>
  <Login/>
</template>
<style scoped></style>
