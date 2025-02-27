<template>
  <div>
    <h1>Gestión de Usuarios</h1>
    <button @click="usuarioStore.fetchUsuarios()" class="bg-blue-500 text-white p-2 rounded">
      Cargar Usuarios
    </button>
    <p v-if="usuarioStore.loading">Cargando usuarios...</p>
    <p v-if="usuarioStore.error" class="text-red-500">{{ usuarioStore.error }}</p>
    <ul v-if="!usuarioStore.loading && usuarioStore.usuarios.length">
      <li v-for="usuario in usuarioStore.usuarios" :key="usuario.pkUsuario">
        {{ usuario.nombre }} - {{ usuario.email }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useUsuarioStore } from '@/stores/usuarioStore';

const usuarioStore = useUsuarioStore();

onMounted(() => {
  usuarioStore.fetchUsuarios();
});
</script>
