<template>
  <div>
    <UsuarioList :usuarios="usuarios" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import api from '@/services/api';
import UsuarioList from '@/components/UsuarioList.vue';
import { Usuario } from '@/types/usuario';

export default defineComponent({
  name: 'UsuariosView',
  components: {
    UsuarioList,
  },
  setup() {
    const usuarios = ref<Usuario[]>([]);

    onMounted(async () => {
      try {
        const response = await api.getUsuarios();
        console.log('Usuarios desde API:', response); // 🔹 Depuración
        usuarios.value = response;
      } catch (error) {
        console.error('Error al cargar usuarios:', error);
      }
    });

    return {
      usuarios,
    };
  },
});
</script>
