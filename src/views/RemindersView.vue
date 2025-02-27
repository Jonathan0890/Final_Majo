<template>
  <main class="bg-light-gray min-h-screen p-6">
    <h1 class="text-navy-blue text-3xl font-bold mb-8">Recordatorios</h1>
    <ReminderForm
      @reminder-added="handleReminderAdded"
      @reminder-updated="handleReminderUpdated"
      :reminder-to-edit="reminderToEdit"
    />

    <section class="mt-8">
      <h2 class="text-light-blue text-2xl font-semibold mb-6">Tus Recordatorios</h2>
      <ul>
        <li
          v-for="reminder in reminders"
          :key="reminder.id"
          class="bg-white p-6 rounded-lg shadow-md mb-6"
        >
          <p class="text-dark-gray text-lg">
            {{ reminder.description }} - <span class="font-semibold">{{ reminder.date }}</span>
          </p>
          <div class="mt-4 flex justify-end">
            <button
              @click="editReminder(reminder)"
              class="text-light-blue hover:underline font-medium"
              aria-label="Editar recordatorio"
            >
              Editar
            </button>
          </div>
        </li>
      </ul>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ReminderForm from '@/components/ReminderForm.vue';
import { Reminder } from '@/types';

export default defineComponent({
  name: 'RemindersView',
  components: {
    ReminderForm,
  },
  setup() {
    const reminders = ref<Reminder[]>([]);
    const reminderToEdit = ref<Reminder | null>(null);

    const handleReminderAdded = (reminder: Reminder) => {
      reminders.value.push(reminder);
    };

    const handleReminderUpdated = (updatedReminder: Reminder) => {
      const index = reminders.value.findIndex((reminder) => reminder.id === updatedReminder.id);
      if (index !== -1) {
        reminders.value[index] = updatedReminder;
      }
      reminderToEdit.value = null;
    };

    const editReminder = (reminder: Reminder) => {
      reminderToEdit.value = reminder;
    };

    return {
      reminders,
      reminderToEdit,
      handleReminderAdded,
      handleReminderUpdated,
      editReminder,
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

.text-dark-gray {
  color: #4a5568;
}
</style>
