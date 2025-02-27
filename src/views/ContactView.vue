<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl mx-auto pt-">
      <!-- Formulario de contacto (IZQUIERDA) -->
      <div class="bg-white shadow-2xl rounded-2xl p-8">
        <h2 class="text-4xl font-bold text-navy-blue mb-4">Contacto</h2>
        <p class="text-gray-600 mb-6 text-lg">
          ¿Tienes alguna pregunta, sugerencia o comentario? ¡Nos encantaría escucharte!
        </p>

        <form class="space-y-6">
          <div>
            <label for="name" class="block text-gray-600 text-sm font-medium mb-2">Nombre</label>
            <input
              type="text"
              id="name"
              class="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-light-blue focus:border-light-blue transition duration-200"
              placeholder="Tu nombre"
              required
            />
          </div>

          <div>
            <label for="email" class="block text-gray-600 text-sm font-medium mb-2">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              class="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-light-blue focus:border-light-blue transition duration-200"
              placeholder="correo@ejemplo.com"
              required
            />
          </div>

          <div>
            <label for="message" class="block text-gray-600 text-sm font-medium mb-2">Mensaje</label>
            <textarea
              id="message"
              rows="5"
              class="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-light-blue focus:border-light-blue transition duration-200"
              placeholder="Escribe tu mensaje aquí..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full bg-navy-blue text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-blue-600 transition transform hover:scale-105 active:scale-95"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>

      <!-- Información de contacto y mapa (DERECHA) -->
      <div class="space-y-8">
        <!-- Información de contacto -->
        <div class="bg-white shadow-2xl rounded-2xl p-8">
          <h3 class="text-2xl font-bold text-navy-blue mb-4">Información de Contacto</h3>
          <div class="space-y-4">
            <div class="flex items-center space-x-4">
              <span class="text-gray-600">
                <i class="fas fa-map-marker-alt text-light-blue text-xl"></i>
              </span>
              <p class="text-gray-600">Av. Principal #123, Col. Centro, Ciudad de México</p>
            </div>
            <div class="flex items-center space-x-4">
              <span class="text-gray-600">
                <i class="fas fa-phone-alt text-light-blue text-xl"></i>
              </span>
              <p class="text-gray-600">+52 55 1234 5678</p>
            </div>
            <div class="flex items-center space-x-4">
              <span class="text-gray-600">
                <i class="fas fa-envelope text-light-blue text-xl"></i>
              </span>
              <p class="text-gray-600">contacto@empresa.com</p>
            </div>
          </div>
        </div>

        <!-- Mapa -->
        <div class="shadow-2xl rounded-2xl overflow-hidden">
          <iframe
            class="w-full h-full min-h-[400px] rounded-2xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59527.03655502408!2d-86.86796799999999!3d21.174681599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2c90ff53da9b%3A0x83bfdad03ecf1fa5!2sMi%20Plaza%20H%C3%A9roes!5e0!3m2!1ses-419!2smx!4v1740416431325!5m2!1ses-419!2smx"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
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

<style>
/* Estilos personalizados */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

.text-navy-blue {
  color: #1a365d;
}

.text-light-blue {
  color: #3182ce;
}

.bg-navy-blue {
  background-color: #1a365d;
}

.hover\:bg-blue-600:hover {
  background-color: #2563eb;
}
</style>
