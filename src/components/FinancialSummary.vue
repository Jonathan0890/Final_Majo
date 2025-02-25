<template>
  <div class="bg-white p-6 rounded-lg shadow">
    <h2 class="text-navy-blue text-2xl font-semibold mb-4">Resumen Financiero</h2>
    <div class="space-y-2">
      <p class="text-dark-gray">Ingresos: <span class="text-light-blue">${{ income }}</span></p>
      <p class="text-dark-gray">Gastos: <span class="text-light-blue">${{ expenses }}</span></p>
      <p class="text-dark-gray">Balance: <span class="text-light-blue">${{ balance }}</span></p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FinancialSummary',
  data() {
    return {
      income: 5000,
      expenses: 3000,
    };
  },
  computed: {
    balance(): number {
      return this.income - this.expenses;
    },
  },
});
</script>
