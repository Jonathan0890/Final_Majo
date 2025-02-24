import axios from 'axios';
import { Usuario } from '@/types/usuario';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // URL del backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  async getUsuarios(): Promise<Usuario[]> {
    try {
      const response = await api.get('/Usuario');
      console.log('Respuesta de la API:', response.data); // 🔹 Depuración
      return response.data; // Asegúrate de que response.data sea un array de Usuario
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      throw error;
    }
  },

  async getUsuarioById(id: number): Promise<Usuario> {
    try {
      const response = await api.get(`/Usuario/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener el usuario:', error);
      throw error;
    }
  },

  async createUsuario(usuario: { nombre: string; email: string }): Promise<Usuario> {
    try {
      const response = await api.post('/Usuario', usuario);
      return response.data;
    } catch (error) {
      console.error('Error al crear el usuario:', error);
      throw error;
    }
  },

  async updateUsuario(id: number, usuario: { nombre: string; email: string }): Promise<Usuario> {
    try {
      const response = await api.put(`/Usuario/${id}`, usuario);
      return response.data;
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
      throw error;
    }
  },

  async deleteUsuario(id: number): Promise<void> {
    try {
      await api.delete(`/Usuario/${id}`);
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
      throw error;
    }
  },
};
