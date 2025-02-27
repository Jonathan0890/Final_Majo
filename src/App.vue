<script setup lang="ts">
import { RouterView } from 'vue-router';
import MainNav from './components/MainNav.vue';
import SpeedDialMenu from './components/SpeedDialMenu.vue';
import MFooter from './components/MFooter.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- Navbar en la parte superior -->
    <header class="w-full">
      <MainNav />
    </header>

    <!-- Contenido Principal -->
    <main class="flex-1 p-6 bg-gray-100">
      <RouterView />
    </main>

    <!-- Speed Dial Menu flotante -->
    <!-- Aseguramos que el menú flotante esté por encima del footer -->
    <SpeedDialMenu class="fixed bottom-20 right-6 z-50" />

    <!-- Footer en la parte inferior -->
    <footer class="w-full">
      <MFooter />
    </footer>
  </div>
</template>

<style>
/* Asegurarnos de que el contenido principal no se solape con el footer */
main {
  margin-bottom: 6rem; /* Ajusta este valor según la altura de tu footer */
}
</style>
