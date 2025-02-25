<template>
  <div class="bg-light-gray min-h-screen p-8 flex flex-col items-center">
    <div class="max-w-5xl w-full">
      <h1 class="text-navy-blue text-3xl font-bold mb-6 text-center">Metas de Ahorro</h1>
      <SavingsGoalForm
        @goal-added="handleGoalAdded"
        @goal-updated="handleGoalUpdated"
        :goalToEdit="goalToEdit"
      />
      <div class="mt-8">
        <h2 class="text-light-blue text-2xl font-semibold mb-6">Tus Metas</h2>
        <ul>
          <li v-for="goal in savingsGoals" :key="goal.id" class="bg-white p-6 rounded-lg shadow-lg mb-6">
            <div class="flex justify-between items-center">
              <div>
                <p class="text-dark-gray text-lg font-medium">{{ goal.name }}</p>
                <p class="text-sm text-gray-600">{{ goal.currentAmount }} / {{ goal.targetAmount }}</p>
                <p class="text-xs text-gray-500">Fecha límite: {{ goal.deadline }}</p>
              </div>
              <div class="space-x-2">
                <button
                  @click="editGoal(goal)"
                  class="bg-light-blue text-white px-4 py-2 rounded-md hover:bg-light-blue-dark transition-colors"
                >
                  Editar
                </button>
                <button
                  @click="deleteGoal(goal.id)"
                  class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import SavingsGoalForm from '@/components/SavingsGoalForm.vue';
import { SavingsGoal } from '@/types';

export default defineComponent({
  name: 'SavingsGoalsView',
  components: {
    SavingsGoalForm,
  },
  setup() {
    const savingsGoals = ref<SavingsGoal[]>([]);

    const goalToEdit = ref<SavingsGoal | null>(null);

    const handleGoalAdded = (goal: SavingsGoal) => {
      savingsGoals.value.push(goal);
    };

    const handleGoalUpdated = (updatedGoal: SavingsGoal) => {
      const index = savingsGoals.value.findIndex((goal) => goal.id === updatedGoal.id);
      if (index !== -1) {
        savingsGoals.value[index] = updatedGoal;
      }
    };

    const editGoal = (goal: SavingsGoal) => {
      goalToEdit.value = { ...goal }; // Clonamos el objetivo para editar
    };

    const deleteGoal = (goalId: number) => {
      savingsGoals.value = savingsGoals.value.filter((goal) => goal.id !== goalId);
    };

    return {
      savingsGoals,
      handleGoalAdded,
      handleGoalUpdated,
      editGoal,
      deleteGoal,
      goalToEdit,
    };
  },
});
</script>
