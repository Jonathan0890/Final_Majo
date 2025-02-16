import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';

interface Note {
  id: number;
  title: string;
  content: string;
  tags: string[];
  date: string;
}

export const useNoteStore = defineStore('note', () => {
  const notes = ref<Note[]>([]);

  // Cargar notas desde localStorage al iniciar
  const loadNotes = () => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      notes.value = JSON.parse(savedNotes);
    }
  };

  // Guardar notas en localStorage cada vez que cambien
  watch(notes, (newNotes) => {
    localStorage.setItem('notes', JSON.stringify(newNotes));
  }, { deep: true });

  // Añadir una nueva nota
  const addNote = (note: Note) => {
    notes.value.unshift(note); // Añadir al principio para que la más reciente esté primero
  };

  // Editar una nota existente
  const editNote = (id: number, updatedNote: Note) => {
    const index = notes.value.findIndex(note => note.id === id);
    if (index !== -1) {
      notes.value[index] = updatedNote;
    }
  };

  // Eliminar una nota
  const deleteNote = (id: number) => {
    notes.value = notes.value.filter(note => note.id !== id);
  };

  // Obtener todas las notas
  const allNotes = computed(() => notes.value);

  // Obtener el total de notas
  const totalNotes = computed(() => notes.value.length);

  // Obtener el total de notas por categoría
  const totalNotesByCategory = computed(() => (category: string) => {
    return notes.value.filter(note => note.tags.includes(category)).length;
  });

  // Limpiar todas las notas
  const clearAllNotes = () => {
    notes.value = [];
  };

  // Limpiar notas por categoría
  const clearNotesByCategory = (category: string) => {
    notes.value = notes.value.filter(note => !note.tags.includes(category));
  };

  // Cargar las notas al inicializar el store
  loadNotes();

  return {
    notes,
    addNote,
    editNote,
    deleteNote,
    allNotes,
    totalNotes,
    totalNotesByCategory,
    clearAllNotes,
    clearNotesByCategory
  };
});
