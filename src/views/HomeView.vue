<template>
  <div class="bg-gray-100 min-h-screen p-6">
    <!-- Título -->
    <h1 class="text-4xl font-bold text-navy-blue text-center mb-10">
      Bienvenido a tu Control Financiero
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Resumen Financiero -->
      <div class="bg-white shadow-lg rounded-xl p-6 transition hover:shadow-2xl">
        <FinancialSummary />
      </div>

      <!-- Gráfico de Líneas (Historial de Ingresos) -->
      <div class="bg-white shadow-lg rounded-xl p-6 transition hover:shadow-2xl md:col-span-1 lg:col-span-2">
        <FinancialChart type="line" :data="lineChartData" :options="lineChartOptions" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FinancialSummary from '@/components/FinancialSummary.vue';
import FinancialChart from '@/components/FinancialChart.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    FinancialSummary,
    FinancialChart,
  },
  setup() {
    // Datos del gráfico
    const lineChartData = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
      datasets: [
        {
          label: 'Ingresos',
          data: [5000, 4000, 6000, 5500, 7000],
          borderColor: '#3B82F6',
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          fill: true,
          tension: 0.4,
        },
      ],
    };

    const lineChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
        },
      },
    };

    return {
      lineChartData,
      lineChartOptions,
    };
  },
});
</script>
