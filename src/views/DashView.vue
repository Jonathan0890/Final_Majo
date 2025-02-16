<script setup lang="ts">
import { ref } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const date = ref<Date | null>(new Date());
</script>

<template>
  <div>
    Hola mundo
    <div>
      XD
      <VueDatePicker v-model="date" :enable-seconds="true" :seconds-grid-increment="2" />
    </div>
  </div>
</template>
