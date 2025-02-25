<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
      <!-- Formulario de contacto (IZQUIERDA) -->
      <div class="bg-white shadow-lg rounded-2xl p-6">
        <h2 class="text-3xl font-bold text-navy-blue mb-4">Contacto</h2>
        <p class="text-gray-600 mb-6">¿Tienes alguna pregunta? ¡Contáctanos!</p>

        <form class="space-y-5">
          <div>
            <label for="name" class="block text-gray-600 text-sm font-medium">Nombre</label>
            <input
              type="text"
              id="name"
              class="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-light-blue focus:border-light-blue"
              placeholder="Tu nombre"
              required
            />
          </div>

          <div>
            <label for="email" class="block text-gray-600 text-sm font-medium">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              class="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-light-blue focus:border-light-blue"
              placeholder="correo@ejemplo.com"
              required
            />
          </div>

          <div>
            <label for="message" class="block text-gray-600 text-sm font-medium">Mensaje</label>
            <textarea
              id="message"
              rows="4"
              class="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-light-blue focus:border-light-blue"
              placeholder="Escribe tu mensaje aquí..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full bg-navy-blue text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-blue-500 transition transform hover:scale-105"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>

      <!-- Mapa (DERECHA) -->
      <div class="shadow-lg rounded-xl overflow-hidden">
        <iframe
          class="w-full h-full min-h-[450px] rounded-xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59527.03655502408!2d-86.86796799999999!3d21.174681599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2c90ff53da9b%3A0x83bfdad03ecf1fa5!2sMi%20Plaza%20H%C3%A9roes!5e0!3m2!1ses-419!2smx!4v1740416431325!5m2!1ses-419!2smx"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ContactView',
});
</script>
