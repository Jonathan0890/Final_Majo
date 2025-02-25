<template>
  <div class="bg-light-gray min-h-screen p-8 flex flex-col justify-center items-center">
    <h1 class="text-navy-blue text-3xl font-bold mb-6 text-center">Iniciar Sesión</h1>
    <p class="text-dark-gray mb-8 text-center">Ingresa tus credenciales para acceder a tu cuenta.</p>

    <form @submit.prevent="handleLogin" class="space-y-6 max-w-sm w-full">
      <!-- Correo Electrónico -->
      <div>
        <label for="email" class="block text-dark-gray text-sm font-medium">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          class="mt-2 block w-full rounded-md border-dark-gray shadow-sm focus:ring-light-blue focus:border-light-blue"
          placeholder="tucorreo@dominio.com"
          v-model="email"
          required
        />
      </div>

      <!-- Contraseña -->
      <div>
        <label for="password" class="block text-dark-gray text-sm font-medium">Contraseña</label>
        <input
          type="password"
          id="password"
          class="mt-2 block w-full rounded-md border-dark-gray shadow-sm focus:ring-light-blue focus:border-light-blue"
          placeholder="********"
          v-model="password"
          required
        />
      </div>

      <!-- Botón de Iniciar Sesión -->
      <div>
        <button type="submit" class="w-full bg-navy-blue text-white px-4 py-2 rounded-md hover:bg-light-blue transition-colors">
          Iniciar Sesión
        </button>
      </div>
    </form>

    <!-- Enlace para Recuperar Contraseña -->
    <p class="text-center text-dark-gray mt-4">
      ¿Olvidaste tu contraseña?
      <a href="/recuperar-contraseña" class="text-light-blue hover:underline">Recupérala aquí</a>
    </p>

    <!-- Enlace para Registro -->
    <p class="text-center text-dark-gray mt-2">
      ¿No tienes cuenta?
      <a href="/registro" class="text-light-blue hover:underline">Regístrate aquí</a>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'LoginView',
  setup() {
    const email = ref('');
    const password = ref('');

    const handleLogin = () => {
      // Lógica de autenticación aquí
      console.log('Iniciando sesión con:', email.value, password.value);
    };

    return {
      email,
      password,
      handleLogin,
    };
  },
});
</script>
