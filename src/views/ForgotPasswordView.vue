<template>
  <div class="bg-light-gray min-h-screen p-8 flex flex-col justify-center items-center">
    <h1 class="text-navy-blue text-3xl font-bold mb-6 text-center">Recuperar Contraseña</h1>
    <p class="text-dark-gray mb-8 text-center">Ingresa tu correo electrónico para recuperar tu contraseña.</p>

    <form @submit.prevent="handleRecovery" class="space-y-6 max-w-sm w-full">
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

      <!-- Botón de Recuperar Contraseña -->
      <div>
        <button type="submit" class="w-full bg-navy-blue text-white px-4 py-2 rounded-md hover:bg-light-blue transition-colors">
          Recuperar Contraseña
        </button>
      </div>
    </form>

    <p class="text-center text-dark-gray mt-4">
      ¿Recuerdas tu contraseña?
      <a href="/iniciar-sesion" class="text-light-blue hover:underline">Inicia sesión aquí</a>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ForgotPasswordView',
  setup() {
    const email = ref('');

    const handleRecovery = () => {
      // Lógica para recuperación de contraseña aquí
      console.log('Enviando recuperación para:', email.value);
    };

    return {
      email,
      handleRecovery,
    };
  },
});
</script>
