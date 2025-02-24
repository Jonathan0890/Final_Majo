<template>
  <div>
    <h1>Lista de Usuarios</h1>
    <ul>
      <li v-for="(usuario, index) in usuarios" :key="usuario.pkUsuario || index">
        <input
          type="text"
          v-model="usuario.nombre"
          :placeholder="`Usuario ${index + 1}`"
          :id="'nombre-' + (usuario.pkUsuario || index)"
        />
        <input
          type="email"
          v-model="usuario.email"
          :placeholder="`Email ${index + 1}`"
          :id="'email-' + (usuario.pkUsuario || index)"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Usuario } from '@/types/usuario';

export default defineComponent({
  name: 'UsuarioList',
  props: {
    usuarios: {
      type: Array as PropType<Usuario[]>,
      required: true,
    },
  },
  mounted() {
    console.log('Usuarios recibidos en UsuarioList:', this.usuarios); // Debugging
  }
});
</script>
