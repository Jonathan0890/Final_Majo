<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainNav from './components/MainNav.vue'
//import MFooter from './components/MFooter.vue';


</script>

<template>
  <header>
    <MainNav />
  </header>
  <RouterView />
</template>
