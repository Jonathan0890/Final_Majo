<template>
  <div class="bg-white p-6 rounded-lg shadow">
    <canvas ref="chart"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, PropType } from 'vue';
import { Chart, registerables, ChartType, ChartData, ChartOptions } from 'chart.js';

// Registra los componentes necesarios de Chart.js
Chart.register(...registerables);

export default defineComponent({
  name: 'FinancialChart',
  props: {
    type: {
      type: String as PropType<ChartType>, // Tipo específico de gráfico
      default: 'bar', // Valor por defecto
    },
    data: {
      type: Object as PropType<ChartData>, // Tipo específico para los datos
      required: true, // Datos para el gráfico
    },
    options: {
      type: Object as PropType<ChartOptions>, // Tipo específico para las opciones
      default: () => ({}), // Opciones personalizadas
    },
  },
  setup(props) {
    const chart = ref<HTMLCanvasElement | null>(null);

    onMounted(() => {
      if (chart.value) {
        new Chart(chart.value, {
          type: props.type,
          data: props.data,
          options: props.options,
        });
      }
    });

    return {
      chart,
    };
  },
});
</script>
