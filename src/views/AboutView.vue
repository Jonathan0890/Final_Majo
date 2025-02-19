<template>
  <div>
    <!-- Filtros y búsqueda -->
    <div class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
      <!-- Dropdown de filtrado -->
      <div class="relative">
        <button
          id="dropdownRadioButton"
          class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          type="button"
          @click="toggleDropdown"
        >
          <svg class="w-3 h-3 text-gray-500 dark:text-gray-400 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
          </svg>
          {{ selectedFilters.length ? `Filters (${selectedFilters.length})` : 'Select Filters' }}
          <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
          </svg>
        </button>
        <!-- Dropdown menu -->
        <div
          v-if="isDropdownOpen"
          class="absolute z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600 mt-2"
        >
          <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200">
            <li v-for="option in filterOptions" :key="option.value">
              <div class="flex items-center p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <input
                  :id="`filter-checkbox-${option.value}`"
                  type="checkbox"
                  :value="option.value"
                  v-model="selectedFilters"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label :for="`filter-checkbox-${option.value}`" class="w-full ms-2 text-sm font-medium text-gray-900 rounded-sm dark:text-gray-300">
                  {{ option.label }}
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Barra de búsqueda -->
      <div class="relative">
        <div class="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
          <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"/>
          </svg>
        </div>
        <input
          type="text"
          v-model="searchQuery"
          class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search for items"
        />
      </div>
    </div>

    <!-- Tabla -->
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  v-model="selectAll"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-all-search" class="sr-only">checkbox</label>
              </div>
            </th>
            <th scope="col" class="px-6 py-3">Product name</th>
            <th scope="col" class="px-6 py-3">Color</th>
            <th scope="col" class="px-6 py-3">Category</th>
            <th scope="col" class="px-6 py-3">Price</th>
            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in filteredItems"
            :key="index"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  :id="`checkbox-table-search-${index}`"
                  type="checkbox"
                  v-model="selectedItems"
                  :value="item"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label :for="`checkbox-table-search-${index}`" class="sr-only">checkbox</label>
              </div>
            </td>
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ item.name }}
            </th>
            <td class="px-6 py-4">{{ item.color }}</td>
            <td class="px-6 py-4">{{ item.category }}</td>
            <td class="px-6 py-4">{{ item.price }}</td>
            <td class="px-6 py-4">
              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

// Datos de ejemplo
interface Item {
  name: string;
  color: string;
  category: string;
  price: string;
}

const items = ref<Item[]>([
  { name: 'Apple MacBook Pro 17"', color: 'Silver', category: 'Laptop', price: '$2999' },
  { name: 'Microsoft Surface Pro', color: 'White', category: 'Laptop PC', price: '$1999' },
  { name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: '$99' },
  { name: 'Apple Watch', color: 'Silver', category: 'Accessories', price: '$179' },
  { name: 'iPad', color: 'Gold', category: 'Tablet', price: '$699' },
  { name: 'Apple iMac 27"', color: 'Silver', category: 'PC Desktop', price: '$3999' },
]);

// Filtros
interface FilterOption {
  value: string;
  label: string;
}

const filterOptions = ref<FilterOption[]>([
  { value: 'last-day', label: 'Last day' },
  { value: 'last-7-days', label: 'Last 7 days' },
  { value: 'last-30-days', label: 'Last 30 days' },
  { value: 'last-month', label: 'Last month' },
  { value: 'last-year', label: 'Last year' },
]);

const selectedFilters = ref<string[]>([]);
const isDropdownOpen = ref(false);
const searchQuery = ref('');
const selectedItems = ref<Item[]>([]);
const selectAll = ref(false);

// Computed: Filtrar elementos
const filteredItems = computed(() => {
  return items.value.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesFilters = selectedFilters.value.length === 0 || selectedFilters.value.includes('last-30-days'); // Lógica de filtrado
    return matchesSearch && matchesFilters;
  });
});

// Métodos
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
</script>

<style scoped>
/* Estilos específicos del componente */
</style>
