<template>
  <header>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <RouterLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <!-- Logo o nombre de la aplicación -->
          <span class="text-navy-blue text-xl font-semibold">Control Financiero</span>
        </RouterLink>
        <div class="flex md:order-2">
          <!-- Botón de búsqueda (opcional) -->
          <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false"
            class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            <span class="sr-only">Buscar</span>
          </button>
          <!-- Botón para abrir/cerrar el menú en móviles -->
          <button data-collapse-toggle="navbar-search" type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search" aria-expanded="false">
            <span class="sr-only">Abrir menú</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <!-- Icono de usuario para autenticación -->
          <div class="relative" ref="authMenu">
            <button @click="toggleAuthMenu" class="flex items-center justify-center p-2 text-gray-500 hover:text-blue-500 focus:outline-none transition-colors">
              <!-- Icono de usuario -->
              <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4a4 4 0 0 0-4 4v1a4 4 0 0 0 4 4h1a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4h-1Zm0 9a5 5 0 0 0-5 5v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1a5 5 0 0 0-5-5h-1Z"/>
              </svg>
            </button>
            <!-- Menú desplegable de autenticación -->
            <div v-if="isAuthMenuOpen" class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg dark:bg-gray-700 transition-all duration-300 ease-in-out z-50">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <RouterLink to="/login" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Iniciar Sesión
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/register" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Registrarse
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
          <!-- Menú principal -->
          <ul
            class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <!-- Inicio -->
            <li>
              <RouterLink to="/" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Inicio
              </RouterLink>
            </li>
            <!-- Finanzas (menú desplegable) -->
            <li>
              <button @click="toggleFinanceMenu" class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Finanzas
                <svg class="w-4 h-4 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <!-- Menú desplegable de Finanzas -->
              <div v-if="isFinanceMenuOpen" class="absolute z-10 mt-2 w-48 bg-white rounded-lg shadow-lg dark:bg-gray-700">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <RouterLink to="/register-transaction" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Registrar Transacción
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/transaction-categories" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Categorías
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/summary" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Resumen
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/savings-goals" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Metas de Ahorro
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/reminders" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Recordatorios
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </li>
            <!-- Contacto -->
            <li>
              <RouterLink to="/contact" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Contacto
              </RouterLink>
            </li>
            <!-- Pruebas -->
            <li>
              <RouterLink to="/pruebas" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Pruebas
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useRoute } from 'vue-router';

// Estado para controlar los menús desplegables
const isFinanceMenuOpen = ref(false);
const isAuthMenuOpen = ref(false);
const authMenu = ref(null); // Referencia al contenedor del menú de autenticación

// Obtener la ruta actual
const route = useRoute();

// Funciones para alternar los menús
const toggleFinanceMenu = () => {
  isFinanceMenuOpen.value = !isFinanceMenuOpen.value;
  isAuthMenuOpen.value = false; // Cierra el otro menú si está abierto
};

const toggleAuthMenu = () => {
  isAuthMenuOpen.value = !isAuthMenuOpen.value;
  isFinanceMenuOpen.value = false; // Cierra el otro menú si está abierto
};

// Función para cerrar el menú al hacer clic fuera
const handleClickOutside = (event) => {
  if (authMenu.value && !authMenu.value.contains(event.target)) {
    isAuthMenuOpen.value = false;
  }
};

// Cerrar el menú al cambiar de ruta
watch(
  () => route.path, // Observar cambios en la ruta
  () => {
    isAuthMenuOpen.value = false; // Cerrar el menú de autenticación
    isFinanceMenuOpen.value = false; // Cerrar el menú de finanzas
  }
);

// Agregar el event listener al montar el componente
onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

// Remover el event listener al desmontar el componente
onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>
