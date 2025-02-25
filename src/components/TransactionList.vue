<template>
  <div class="bg-white p-6 rounded-lg shadow">
    <h2 class="text-navy-blue text-2xl font-semibold mb-4">Transacciones Recientes</h2>
    <div v-for="transaction in transactions" :key="transaction.id" class="border-b border-dark-gray py-2">
      <p class="text-dark-gray">{{ transaction.description }} - ${{ transaction.amount }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TransactionList',
  data() {
    return {
      transactions: [
        { id: 1, description: 'Comida', amount: 50 },
        { id: 2, description: 'Transporte', amount: 20 },
      ],
    };
  },
});
</script>
