<template>
  <div class="bg-gray-100 min-h-screen p-8 flex flex-col items-center">
    <div class="max-w-4xl w-full">
      <h1 class="text-navy-blue text-3xl font-bold mb-2 text-center">Categorías de Transacciones</h1>
      <p class="text-gray-600 mb-6 text-center">Gestiona y organiza tus gastos según diferentes categorías.</p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="category in categories"
          :key="category.id"
          class="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105 flex flex-col items-center text-center"
        >
          <div class="text-4xl mb-3">
            {{ category.icon }}
          </div>
          <h2 class="text-xl font-semibold text-light-blue">{{ category.name }}</h2>
          <p class="text-gray-500">{{ category.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TransactionCategoriesView',
  data() {
    return {
      categories: [
        { id: 1, name: 'Comida', description: 'Gastos en alimentos y bebidas.', icon: '🍔' },
        { id: 2, name: 'Transporte', description: 'Gastos en transporte público o privado.', icon: '🚗' },
        { id: 3, name: 'Entretenimiento', description: 'Gastos en actividades recreativas.', icon: '🎬' },
      ],
    };
  },
});
</script>
