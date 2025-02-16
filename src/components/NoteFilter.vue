<template>
  <div>
    <select v-model="selectedFilter" @change="emitFilter">
      <option value="">Todas</option>
      <option value="trabajo">Trabajo</option>
      <option value="personal">Personal</option>
      <option value="urgente">Urgente</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const selectedFilter = ref<string>('');

const emit = defineEmits<{
  (e: 'filter', selectedFilter: string): void;
}>();

const emitFilter = () => {
  emit('filter', selectedFilter.value);
};
</script>
