import { defineStore } from 'pinia';
import type { Usuario } from '@/types/usuario';
import api from '@/utils/api';

export const useUsuarioStore = defineStore('usuario', {
  state: () => ({
    usuarios: [] as Usuario[],
    usuarioSeleccionado: null as Usuario | null,
    loading: false,
    error: null as string | null,
  }),

  actions: {
    // Obtener todos los usuarios
    async fetchUsuarios() {
      this.loading = true;
      this.error = null;
      try {
        const response = await api.getUsuarios();

        // 🔍 Imprime la respuesta completa de la API
        console.log('Respuesta completa de la API:', response);

        // 🔍 Verifica si response tiene la estructura esperada
        if (response?.data && Array.isArray(response.data)) {
          this.usuarios = response.data;
        } else if (response?.data?.data && Array.isArray(response.data.data)) {
          this.usuarios = response.data.data;
        } else {
          this.error = 'La API no devolvió un array válido';
          console.error(this.error, response);
        }
      } catch (error) {
        this.error = 'Error al obtener usuarios';
        console.error(this.error, error);
      } finally {
        this.loading = false;
      }
    }



    ,

    // Obtener usuario por ID
    async fetchUsuarioById(id: number) {
      this.loading = true;
      try {
        const response = await api.getUsuarioById(id);
        if (response?.data) {
          this.usuarioSeleccionado = response.data;
        } else {
          this.usuarioSeleccionado = null;
          console.error('El usuario no existe o la API devolvió un valor inválido.');
        }
      } catch (error) {
        console.error('Error al obtener usuario por ID:', error);
        this.usuarioSeleccionado = null;
      } finally {
        this.loading = false;
      }
    },

    // Crear un nuevo usuario
    async createUsuario(nuevoUsuario: { nombre: string; email: string }) {
      try {
        const response = await api.createUsuario(nuevoUsuario);
        if (response?.data) {
          this.usuarios.push(response.data);
        } else {
          console.error('Error: La API no devolvió un usuario válido al crear.');
        }
      } catch (error) {
        console.error('Error al crear usuario:', error);
      }
    },

    // Actualizar un usuario
    async updateUsuario(id: number, usuarioActualizado: { nombre: string; email: string }) {
      try {
        const response = await api.updateUsuario(id, usuarioActualizado);
        if (response?.data) {
          this.usuarios = this.usuarios.map(usuario =>
            usuario.pkUsuario === id ? response.data : usuario
          );
        } else {
          console.error('Error: La API no devolvió un usuario válido al actualizar.');
        }
      } catch (error) {
        console.error('Error al actualizar usuario:', error);
      }
    },

    // Eliminar un usuario
    async deleteUsuario(id: number) {
      try {
        await api.deleteUsuario(id);
        this.usuarios = this.usuarios.filter(usuario => usuario.pkUsuario !== id);
      } catch (error) {
        console.error('Error al eliminar usuario:', error);
      }
    },
  },
});
