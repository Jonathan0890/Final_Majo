<template>
  <div class="fixed end-6 bottom-6 group">
    <!-- Botones que aparecen cuando se abre el menú -->
    <div v-if="isOpen" class="flex flex-col items-center mb-4 space-y-2">
      <button @click="share" class="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 shadow-sm hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 focus:outline-none">
        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
          <path d="M14.419 10.581a3.564 3.564 0 0 0-2.574 1.1l-4.756-2.49a3.54 3.54 0 0 0 .072-.71 3.55 3.55 0 0 0-.043-.428L11.67 6.1a3.56 3.56 0 1 0-.831-2.265c.006.143.02.286.043.428L6.33 6.218a3.573 3.573 0 1 0-.175 4.743l4.756 2.491a3.58 3.58 0 1 0 3.508-2.871Z" />
        </svg>
        <span class="sr-only">Share</span>
      </button>

      <button @click="printPage" class="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 shadow-sm hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 focus:outline-none">
        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M5 20h10a1 1 0 0 0 1-1v-5H4v5a1 1 0 0 0 1 1Z" />
          <path d="M18 7H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2v-3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z" />
        </svg>
        <span class="sr-only">Print</span>
      </button>
    </div>

    <!-- Botón principal que abre/cierra el menú -->
    <button @click="toggleMenu" class="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none">
      <svg class="w-5 h-5 transition-transform" :class="{ 'rotate-45': isOpen }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
      </svg>
      <span class="sr-only">Open actions menu</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Estado para abrir/cerrar el menú
const isOpen = ref(false);

// Función para alternar el estado del menú
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

// Función para compartir (con manejo de errores)
const share = async () => {
  if (navigator.share) {
    try {
      await navigator.share({ title: "Share", url: window.location.href });
    } catch (error) {
      console.error("Error sharing:", error);
    }
  } else {
    alert("Sharing is not supported in this browser.");
  }
};

// Función para imprimir la página
const printPage = () => {
  window.print();
};
</script>
