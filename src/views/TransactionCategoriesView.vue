<template>
  <main class="bg-gray-100 min-h-screen p-8 flex flex-col items-center">
    <div class="max-w-4xl w-full">
      <h1 class="text-navy-blue text-3xl font-bold mb-2 text-center">Categorías de Transacciones</h1>
      <p class="text-gray-600 mb-6 text-center">Gestiona y organiza tus gastos según diferentes categorías.</p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <article
          v-for="category in categories"
          :key="category.id"
          class="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105 flex flex-col items-center text-center"
          :aria-labelledby="`category-${category.id}-title`"
        >
          <div class="text-4xl mb-3" aria-hidden="true">
            {{ category.icon }}
          </div>
          <h2 :id="`category-${category.id}-title`" class="text-xl font-semibold text-light-blue">
            {{ category.name }}
          </h2>
          <p class="text-gray-500">{{ category.description }}</p>
        </article>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { categories } from '@/data/categories'; // Importa las categorías desde un archivo externo

export default defineComponent({
  name: 'TransactionCategoriesView',
  data() {
    return {
      categories,
    };
  },
});
</script>

<style scoped>
/* Estilos específicos para este componente */
.text-navy-blue {
  color: #1a365d;
}

.text-light-blue {
  color: #3182ce;
}
</style>
