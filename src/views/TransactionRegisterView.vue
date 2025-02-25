<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">

      <!-- Formulario de transacciones -->
      <TransactionForm @transaction-added="handleTransactionAdded" />

      <!-- Lista de transacciones -->
      <div class="bg-white shadow-lg rounded-2xl p-6">
        <h2 class="text-2xl font-bold text-navy-blue mb-4">Historial de Transacciones</h2>

        <div v-if="transactions.length > 0" class="space-y-4">
          <div
            v-for="(transaction, index) in transactions"
            :key="index"
            class="flex justify-between p-3 bg-gray-100 rounded-lg"
          >
            <span class="text-gray-700">{{ formatCategory(transaction.category) }}</span>
            <span class="font-bold text-light-blue">${{ transaction.amount }}</span>
          </div>
        </div>

        <p v-else class="text-gray-500">No hay transacciones registradas.</p>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import TransactionForm from '@/components/TransactionForm.vue';

interface Transaction {
  amount: number;
  category: string;
}

export default defineComponent({
  name: 'TransactionRegisterView',
  components: {
    TransactionForm,
  },
  setup() {
    const transactions = ref<Transaction[]>([]);

    const handleTransactionAdded = (transaction: Transaction) => {
      transactions.value.push(transaction);
    };

    const formatCategory = (category: string) => {
      const categories: { [key: string]: string } = {
        food: "🍔 Comida",
        transport: "🚗 Transporte",
        entertainment: "🎬 Entretenimiento",
      };
      return categories[category] || "❓ Otra";
    };

    return {
      transactions,
      handleTransactionAdded,
      formatCategory,
    };
  },
});
</script>
