<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="title" placeholder="Título" required />
    <textarea v-model="content" placeholder="Contenido" required></textarea>
    <select v-model="selectedTags" multiple>
      <option value="trabajo">Trabajo</option>
      <option value="personal">Personal</option>
      <option value="urgente">Urgente</option>
    </select>
    <button type="submit">{{ isEditing ? 'Actualizar' : 'Crear' }} Nota</button>
  </form>
</template>

<script setup lang="ts">
import { ref, computed, defineProps, defineEmits } from 'vue';
import { useNoteStore } from '../stores/noteStore.ts';
import { Note } from '../types/index.ts';

interface Note {
  id?: number;
  title: string;
  content: string;
  tags: string[];
}

const props = defineProps<{
  noteToEdit?: Note;
}>();

const emit = defineEmits<{
  (e: 'note-submitted', note: Note): void;
}>();

const title = ref(props.noteToEdit?.title || '');
const content = ref(props.noteToEdit?.content || '');
const selectedTags = ref<string[]>(props.noteToEdit?.tags || []);

const isEditing = computed(() => !!props.noteToEdit);

const handleSubmit = () => {
  const note: Note = {
    id: props.noteToEdit?.id || Date.now(),
    title: title.value,
    content: content.value,
    tags: selectedTags.value,
  };

  emit('note-submitted', note);
};
</script>
