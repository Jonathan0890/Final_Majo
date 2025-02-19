<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainNav from './components/MainNav.vue'
import MSidebar from './components/MSidebar.vue';
import SpeedDialMenu from './components/SpeedDialMenu.vue';
//import MFooter from './components/MFooter.vue';


</script>

<template>
  <header>
    <MainNav />
  </header>
  <div>
    <MSidebar/>
    <div>
      <SpeedDialMenu/>
    </div>
  </div>
  <RouterView />
</template>
