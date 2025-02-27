<template>
  <div class="bg-gray-100 min-h-screen p-6">
    <!-- Encabezado -->
    <header class="mb-10 text-center">
      <h1 class="text-4xl font-extrabold text-navy-blue">👋 ¡Bienvenido, Usuario!</h1>
      <p class="text-gray-600 text-lg mt-2">Gestiona tus finanzas de manera inteligente</p>
    </header>

    <!-- Carrusel -->
    <div class="relative mb-10 overflow-hidden rounded-xl shadow-lg">
      <div
        class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="(image, index) in images"
          :key="index"
          class="w-full flex-shrink-0"
        >
          <img
            :src="image"
            :alt="`Slide ${index + 1}`"
            class="w-full h-96 object-cover"
          />
        </div>
      </div>

      <!-- Botones de navegación -->
      <button
        @click="prevSlide"
        class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 p-2 rounded-full shadow-md hover:bg-white/80 transition"
      >
        ❮
      </button>
      <button
        @click="nextSlide"
        class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 p-2 rounded-full shadow-md hover:bg-white/80 transition"
      >
        ❯
      </button>

      <!-- Indicadores de posición -->
      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <button
          v-for="(image, index) in images"
          :key="index"
          @click="currentIndex = index"
          class="w-3 h-3 rounded-full bg-white/50 hover:bg-white/80 transition"
          :class="{ 'bg-white': currentIndex === index }"
        ></button>
      </div>
    </div>

    <!-- Secciones principales -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Resumen Financiero -->
      <div class="bg-white shadow-lg rounded-xl p-6 transition hover:shadow-2xl">
        <FinancialSummary />
      </div>

      <!-- Gráfico de Ingresos -->
      <div class="bg-white shadow-lg rounded-xl p-6 transition hover:shadow-2xl md:col-span-1 lg:col-span-2">
        <FinancialChart type="line" :data="lineChartData" :options="lineChartOptions" />
      </div>

      <!-- Accesos rápidos -->
      <div class="bg-white shadow-lg rounded-xl p-6 transition hover:shadow-2xl">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">Accesos Rápidos</h2>
        <div class="grid grid-cols-2 gap-4">
          <button class="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 flex items-center justify-center">
            <span class="mr-2">📄</span> Facturas
          </button>
          <button class="bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600 flex items-center justify-center">
            <span class="mr-2">📊</span> Reportes
          </button>
          <button class="bg-purple-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-purple-600 flex items-center justify-center">
            <span class="mr-2">⚙</span> Configuración
          </button>
          <button class="bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 flex items-center justify-center">
            <span class="mr-2">🔔</span> Notificaciones
          </button>
        </div>
      </div>

      <!-- Últimas notificaciones -->
      <div class="bg-white shadow-lg rounded-xl p-6 transition hover:shadow-2xl md:col-span-2 lg:col-span-1">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">Últimas Notificaciones</h2>
        <ul class="text-gray-600 space-y-2">
          <li class="flex items-center">
            <span class="text-blue-500">📢</span>
            <span class="ml-2">Pago de factura recibido.</span>
          </li>
          <li class="flex items-center">
            <span class="text-green-500">📈</span>
            <span class="ml-2">Tus ingresos han aumentado un 15% este mes.</span>
          </li>
          <li class="flex items-center">
            <span class="text-red-500">⚠</span>
            <span class="ml-2">Tienes una factura pendiente de pago.</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Espacio para evitar que el footer tape el contenido -->
    <div class="h-20"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watchEffect } from 'vue';
import FinancialSummary from '@/components/FinancialSummary.vue';
import FinancialChart from '@/components/FinancialChart.vue';

// 📌 Estado del carrusel
const images = ref([
  "https://source.unsplash.com/800x400/?nature",
  "https://source.unsplash.com/800x400/?technology",
  "https://source.unsplash.com/800x400/?city"
]);

const currentIndex = ref(0);
let interval = null;

// 📌 Funciones del carrusel
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
};

// 📌 Auto-play cada 3 segundos
const startAutoPlay = () => {
  interval = setInterval(() => {
    nextSlide();
  }, 3000);
};

// 📌 Detener autoplay cuando el mouse entra
const stopAutoPlay = () => {
  clearInterval(interval);
};

// 📌 Iniciar autoplay al montar
onMounted(() => {
  startAutoPlay();
});

// 📌 Detener autoplay al desmontar
onUnmounted(() => {
  stopAutoPlay();
});

// 📌 Reiniciar autoplay cuando cambia el índice
watchEffect(() => {
  stopAutoPlay();
  startAutoPlay();
});

// 📌 Datos del gráfico
const lineChartData = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
  datasets: [
    {
      label: 'Ingresos',
      data: [5000, 4000, 6000, 5500, 7000],
      borderColor: '#3B82F6',
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      fill: true,
      tension: 0.4,
    },
  ],
};

const lineChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};
</script>

<style scoped>
/* Estilos adicionales si es necesario */
</style>
