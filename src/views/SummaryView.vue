<template>
  <main class="bg-gray-100 min-h-screen p-8 flex flex-col items-center">
    <div class="max-w-5xl w-full">
      <h1 class="text-navy-blue text-3xl font-bold mb-6 text-center">Resumen Financiero</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Gráfico de Barras (Ingresos vs Gastos) -->
        <section class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <h2 class="text-xl font-semibold text-center text-light-blue mb-4">Ingresos vs Gastos</h2>
          <FinancialChart
            type="bar"
            :data="barChartData"
            :options="barChartOptions"
            aria-label="Gráfico de barras mostrando ingresos y gastos mensuales"
          />
        </section>

        <!-- Gráfico de Torta (Distribución de Gastos) -->
        <section class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <h2 class="text-xl font-semibold text-center text-light-blue mb-4">Distribución de Gastos</h2>
          <FinancialChart
            type="pie"
            :data="pieChartData"
            :options="pieChartOptions"
            aria-label="Gráfico de torta mostrando la distribución de gastos por categoría"
          />
        </section>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FinancialChart from '@/components/FinancialChart.vue';
import {  ChartOptions } from 'chart.js';
import { barChartData, pieChartData } from '@/data/chartData'; // Importa los datos desde un archivo externo

export default defineComponent({
  name: 'SummaryView',
  components: {
    FinancialChart,
  },
  setup() {
    // Opciones para el gráfico de barras
    const barChartOptions: ChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
        },
      },
    };

    // Opciones para el gráfico de torta
    const pieChartOptions: ChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
        },
      },
    };

    return {
      barChartData,
      barChartOptions,
      pieChartData,
      pieChartOptions,
    };
  },
});
</script>

<style scoped>
/* Estilos específicos para este componente */
.text-navy-blue {
  color: #1a365d;
}

.text-light-blue {
  color: #3182ce;
}
</style>
