<template>
  <form @submit.prevent="submitTransaction" class="bg-white shadow-lg rounded-2xl p-6 space-y-5">
    <h2 class="text-2xl font-bold text-navy-blue">Nueva Transacción</h2>

    <div>
      <label for="amount" class="block text-gray-600 text-sm font-medium">Monto</label>
      <input
        type="number"
        v-model="transaction.amount"
        id="amount"
        class="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-light-blue focus:border-light-blue"
        placeholder="Ingrese el monto"
        required
      />
    </div>

    <div>
      <label for="category" class="block text-gray-600 text-sm font-medium">Categoría</label>
      <select
        v-model="transaction.category"
        id="category"
        class="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-light-blue focus:border-light-blue"
        required
      >
        <option value="">Seleccione una categoría</option>
        <option value="food">🍔 Comida</option>
        <option value="transport">🚗 Transporte</option>
        <option value="entertainment">🎬 Entretenimiento</option>
      </select>
    </div>

    <button
      type="submit"
      class="w-full bg-navy-blue text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-blue-500 transition transform hover:scale-105"
    >
      Agregar Transacción
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TransactionForm',
  data() {
    return {
      transaction: {
        amount: 0,
        category: '',
      },
    };
  },
  methods: {
    submitTransaction() {
      if (!this.transaction.amount || !this.transaction.category) return;
      this.$emit('transaction-added', { ...this.transaction });
      this.transaction = { amount: 0, category: '' }; // Reset form
    },
  },
});
</script>
