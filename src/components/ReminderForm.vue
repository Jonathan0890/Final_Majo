<template>
  <form @submit.prevent="submitReminder" class="space-y-6 bg-white p-6 rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold text-navy-blue mb-4">{{ editingReminder ? 'Editar Recordatorio' : 'Agregar Recordatorio' }}</h2>

    <!-- Descripción del Recordatorio -->
    <div>
      <label for="description" class="block text-dark-gray text-sm font-medium">Descripción</label>
      <input
        type="text"
        v-model="reminder.description"
        id="description"
        class="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-light-blue focus:border-light-blue"
        placeholder="Ej. Reunión con el equipo"
        required
      />
    </div>

    <!-- Fecha del Recordatorio -->
    <div>
      <label for="date" class="block text-dark-gray text-sm font-medium">Fecha</label>
      <input
        type="date"
        v-model="reminder.date"
        id="date"
        class="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-light-blue focus:border-light-blue"
        required
      />
    </div>

    <!-- Botones de Acción -->
    <div class="flex justify-between items-center mt-4">
      <button
        type="submit"
        class="bg-navy-blue text-white px-6 py-3 rounded-md hover:bg-light-blue focus:outline-none focus:ring-2 focus:ring-light-blue"
      >
        {{ editingReminder ? 'Actualizar Recordatorio' : 'Agregar Recordatorio' }}
      </button>
      <button
        v-if="editingReminder"
        @click.prevent="cancelEdit"
        class="bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
      >
        Cancelar
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { Reminder } from '@/types';

export default defineComponent({
  name: 'ReminderForm',
  emits: ['reminder-added', 'reminder-updated'],
  props: {
    reminderToEdit: {
      type: Object as () => Reminder | null,
      default: null,
    },
  },
  setup(props, { emit }) {
    const reminder = ref<Reminder>({
      id: 0,
      description: '',
      date: '',
    });

    const editingReminder = ref(false);

    watch(() => props.reminderToEdit, (newReminder) => {
      if (newReminder) {
        reminder.value = { ...newReminder };
        editingReminder.value = true;
      }
    });

    const submitReminder = () => {
      if (editingReminder.value) {
        emit('reminder-updated', { ...reminder.value });
      } else {
        emit('reminder-added', { ...reminder.value, id: Date.now() }); // Simulamos un ID único
      }
      reminder.value = { id: 0, description: '', date: '' }; // Reset form
      editingReminder.value = false;
    };

    const cancelEdit = () => {
      reminder.value = { id: 0, description: '', date: '' };
      editingReminder.value = false;
    };

    return {
      reminder,
      submitReminder,
      editingReminder,
      cancelEdit,
    };
  },
});
</script>

<style scoped>
/* Estilos personalizados */
.bg-light-blue {
  background-color: #3B82F6;
}

.bg-navy-blue {
  background-color: #1E3A8A;
}

.text-dark-gray {
  color: #4B5563;
}

.text-navy-blue {
  color: #1E3A8A;
}

.text-light-blue {
  color: #93C5FD;
}
</style>
