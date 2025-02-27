<template>
  <div class="bg-light-gray min-h-screen p-8">
    <div class="max-w-sm w-full mx-auto pt-12">
      <h1 class="text-navy-blue text-3xl font-bold mb-6 text-center">Iniciar Sesión</h1>
      <p class="text-dark-gray mb-8 text-center">Ingresa tus credenciales para acceder a tu cuenta.</p>

      <form @submit.prevent="handleLogin" class="space-y-6">
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

      <!-- Separador -->
      <div class="flex items-center my-6">
        <div class="flex-grow border-t border-dark-gray"></div>
        <span class="mx-4 text-dark-gray">O</span>
        <div class="flex-grow border-t border-dark-gray"></div>
      </div>

      <!-- Botones de Inicio de Sesión con Redes Sociales -->
      <div class="space-y-4">
        <button @click="loginWithGoogle" class="w-full bg-white text-dark-gray px-4 py-2 rounded-md border border-dark-gray hover:bg-gray-50 transition-colors flex items-center justify-center">
          <img src="https://www.google.com/favicon.ico" alt="Google" class="w-5 h-5 mr-2">
          Continuar con Google
        </button>
        <button @click="loginWithFacebook" class="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center">
          <img src="https://www.facebook.com/favicon.ico" alt="Facebook" class="w-5 h-5 mr-2">
          Continuar con Facebook
        </button>
        <button @click="loginWithApple" class="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900 transition-colors flex items-center justify-center">
          <img src="https://www.apple.com/favicon.ico" alt="Apple" class="w-5 h-5 mr-2">
          Continuar con Apple
        </button>
      </div>
    </div>
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

    const loginWithGoogle = () => {
      // Lógica para iniciar sesión con Google
      console.log('Iniciando sesión con Google');
    };

    const loginWithFacebook = () => {
      // Lógica para iniciar sesión con Facebook
      console.log('Iniciando sesión con Facebook');
    };

    const loginWithApple = () => {
      // Lógica para iniciar sesión con Apple
      console.log('Iniciando sesión con Apple');
    };

    return {
      email,
      password,
      handleLogin,
      loginWithGoogle,
      loginWithFacebook,
      loginWithApple,
    };
  },
});
</script>
