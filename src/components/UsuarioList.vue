<script setup lang="ts">
import { useUsuarioStore } from '@/stores/usuarioStore';

const usuarioStore = useUsuarioStore();
</script>

<template>
  <div>
    <h1>Lista de Usuarios</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="usuario in usuarioStore.usuarios" :key="usuario.pkUsuario">
          <td>{{ usuario.pkUsuario }}</td>
          <td>{{ usuario.nombre }}</td>
          <td>{{ usuario.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
