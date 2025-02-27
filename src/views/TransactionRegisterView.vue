<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-start justify-center p-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl -mt-4">

      <!-- Formulario de transacciones -->
      <div class="bg-white shadow-lg rounded-2xl p-6">
        <h2 class="text-2xl font-semibold text-navy-blue mb-4 flex items-center gap-2">
          ✍️ Registrar Transacción
        </h2>
        <TransactionForm @transaction-added="handleTransactionAdded" />
      </div>

      <!-- Historial de Transacciones -->
      <div class="bg-white shadow-lg rounded-2xl p-6">
        <h2 class="text-2xl font-semibold text-navy-blue mb-4 flex items-center gap-2">
          📜 Historial de Transacciones
        </h2>

        <div v-if="transactions.length > 0" class="space-y-4">
          <div
            v-for="(transaction, index) in transactions"
            :key="index"
            class="flex justify-between items-center p-3 bg-gray-50 border border-gray-200 rounded-lg"
          >
            <span class="text-gray-700 flex items-center gap-2">
              {{ formatCategory(transaction.category) }}
            </span>
            <span class="font-bold text-blue-600 text-lg">${{ transaction.amount }}</span>
          </div>
        </div>

        <p v-else class="text-gray-500 text-center py-6">🚀 No hay transacciones registradas.</p>
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
        shopping: "🛍️ Compras",
        health: "🏥 Salud",
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

<style>
/* Estilos para el botón sin animaciones */
button[type="submit"] {
  background-color: #3b82f6; /* Color azul */
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  font-weight: 500;
}

button[type="submit"]:hover {
  background-color: #2563eb; /* Color azul más oscuro al hacer hover */
}
</style>
