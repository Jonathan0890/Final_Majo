<template>
  <div>
    <NoteFilter @filter="setFilter" />
    <ul>
      <li v-for="note in filteredNotes" :key="note.id">
        <h3>{{ note.title }}</h3>
        <p>{{ note.content }}</p>
        <p>Tags: {{ note.tags.join(', ') }}</p>
        <button @click="editNote(note)">Editar</button>
        <button @click="deleteNote(note.id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import { useNoteStore } from '../stores/noteStore';
import NoteFilter from './NoteFilter.vue.ts';
import { Note } from '../types/index.ts';

const noteStore = useNoteStore();
const filter = ref<string>('');

const setFilter = (selectedFilter: string) => {
  filter.value = selectedFilter;
};

const filteredNotes = computed(() => {
  if (!filter.value) return noteStore.allNotes;
  return noteStore.allNotes.filter(note => note.tags.includes(filter.value));
});

const editNote = (note: Note) => {
  // Implementar lógica para editar la nota
};

const deleteNote = (id: number) => {
  noteStore.deleteNote(id);
};

onMounted(() => {
  noteStore.loadNotes();
});
</script>
