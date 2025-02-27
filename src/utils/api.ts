import axios from "axios";

const BASE_URL = "https://localhost:7247/api/Usuario"; // URL corregida

export default {
  async getUsuarios() {
    return (await axios.get(`${BASE_URL}`)).data;
  },
  async getUsuarioById(id: number) {
    return (await axios.get(`${BASE_URL}/${id}`)).data;
  },
  async createUsuario(usuario: { nombre: string; email: string }) {
    return (await axios.post(`${BASE_URL}`, usuario)).data;
  },
  async updateUsuario(id: number, usuario: { nombre: string; email: string }) {
    return (await axios.put(`${BASE_URL}/${id}`, usuario)).data;
  },
  async deleteUsuario(id: number) {
    return (await axios.delete(`${BASE_URL}/${id}`)).data;
  },
};
