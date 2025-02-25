<template>
  <div class="bg-light-gray min-h-screen p-8">
    <h1 class="text-navy-blue text-3xl font-bold mb-6 text-center">Registro</h1>
    <p class="text-dark-gray mb-8 text-center">Crea una cuenta para empezar a gestionar tus finanzas.</p>
    <form class="space-y-6 max-w-sm mx-auto">
      <!-- Correo Electrónico -->
      <div>
        <label for="email" class="block text-dark-gray text-sm font-medium">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          class="mt-2 block w-full rounded-md border-dark-gray shadow-sm focus:ring-light-blue focus:border-light-blue"
          placeholder="tucorreo@dominio.com"
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
          required
        />
      </div>

      <!-- Confirmar Contraseña -->
      <div>
        <label for="confirm-password" class="block text-dark-gray text-sm font-medium">Confirmar Contraseña</label>
        <input
          type="password"
          id="confirm-password"
          class="mt-2 block w-full rounded-md border-dark-gray shadow-sm focus:ring-light-blue focus:border-light-blue"
          placeholder="********"
          required
        />
      </div>

      <!-- Botón de Registro -->
      <div>
        <button type="submit" class="w-full bg-navy-blue text-white px-4 py-2 rounded-md hover:bg-light-blue transition-colors">
          Registrarse
        </button>
      </div>
    </form>
    <p class="text-center text-dark-gray mt-4">
      ¿Ya tienes cuenta? <a href="/iniciar-sesion" class="text-light-blue hover:underline">Inicia sesión aquí</a>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RegisterView',
});
</script>
