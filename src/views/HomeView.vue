<script setup lang="ts">
import { ref, watchEffect, onMounted, onUnmounted } from 'vue';

// 📌 Estado del acordeón
const activeAccordion = ref(null);
const toggleAccordion = (index) => {
  activeAccordion.value = activeAccordion.value === index ? null : index;
};

// 📌 Imágenes del carrusel
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
</script>

<template>
  <div class="max-w-3xl mx-auto mt-6 space-y-10">
    <!-- 📌 Acordeón -->
    <div class="border border-gray-300 rounded-lg shadow-md">
      <h2 class="text-xl font-bold text-gray-700 p-5 bg-gray-100 rounded-t-lg">Preguntas Frecuentes</h2>
      <div v-for="(item, index) in ['¿Qué es ?', '¿Hay un archivo Figma?', 'Diferencias entre css y Tailwind ']" :key="index">
        <button
          @click="toggleAccordion(index)"
          class="flex justify-between w-full p-5 text-gray-600 font-medium border-b border-gray-300 hover:bg-gray-100 transition-all"
        >
          <span>{{ item }}</span>
          <span :class="activeAccordion === index ? 'rotate-180' : ''" class="transition-transform">▼</span>
        </button>
        <div
          v-show="activeAccordion === index"
          class="p-5 bg-gray-50 text-gray-500"
        >
          <p v-if="index === 0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti alias voluptate error libero reiciendis labore accusamus cupiditate quidem! Itaque ipsum laboriosam perferendis nam voluptatum dolores error in consequatur ad voluptate?
          </p>
          <p v-if="index === 1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, deleniti corrupti unde, est exercitationem earum magnam nisi esse ipsam aliquam nostrum, molestias et accusamus dignissimos commodi eligendi maiores natus! Rerum.
          </p>
          <p v-if="index === 2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi cumque fuga delectus nisi eius! Officiis nesciunt ducimus, et suscipit nemo cupiditate, voluptatem sunt in esse ipsum, quod eaque nulla tempore.
          </p>
        </div>
      </div>
    </div>

    <!-- 📌 Separación entre acordeón y carrusel -->
    <div class="border-t border-gray-300 my-4"></div>

    <!-- 📌 Carrusel -->
    <div class="relative w-full overflow-hidden rounded-lg shadow-lg">
      <h2 class="text-xl font-bold text-gray-700 p-5 bg-gray-100 rounded-t-lg">Galería</h2>
      <div class="relative w-full h-56 md:h-64">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="absolute inset-0 w-full h-full transition-opacity duration-500"
          :class="{ 'opacity-100': index === currentIndex, 'opacity-0': index !== currentIndex }"
        >
          <img :src="image" class="object-cover w-full h-full" alt="Slide Image">
        </div>
      </div>

      <!-- Botones Prev & Next -->
      <button
        @click="prevSlide"
        class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
      >
        ❮
      </button>
      <button
        @click="nextSlide"
        class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
      >
        ❯
      </button>

      <!-- Indicadores -->
      <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        <span
          v-for="(image, index) in images"
          :key="index"
          @click="currentIndex = index"
          class="w-3 h-3 rounded-full cursor-pointer transition-all"
          :class="index === currentIndex ? 'bg-white scale-125' : 'bg-gray-500'"
        ></span>
      </div>
    </div>
  </div>
</template>
