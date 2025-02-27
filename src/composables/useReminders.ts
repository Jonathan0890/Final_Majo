import { ref } from 'vue';
import { Reminder } from '@/types';

export const useReminders = () => {
  const reminders = ref<Reminder[]>([]);

  const handleReminderAdded = (reminder: Reminder) => {
    reminders.value.push(reminder);
  };

  const handleReminderUpdated = (updatedReminder: Reminder) => {
    const index = reminders.value.findIndex((reminder) => reminder.id === updatedReminder.id);
    if (index !== -1) {
      reminders.value[index] = updatedReminder;
    }
  };

  const editReminder = (reminder: Reminder) => {
    // Aquí puedes pasar el recordatorio a la forma para editar
    console.log('Editar recordatorio:', reminder);
  };

  return {
    reminders,
    handleReminderAdded,
    handleReminderUpdated,
    editReminder,
  };
};
