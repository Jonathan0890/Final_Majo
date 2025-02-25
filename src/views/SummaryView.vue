<template>
  <div class="bg-gray-100 min-h-screen p-8 flex flex-col items-center">
    <div class="max-w-5xl w-full">
      <h1 class="text-navy-blue text-3xl font-bold mb-6 text-center">Resumen Financiero</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Gráfico de Barras (Ingresos vs Gastos) -->
        <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <h2 class="text-xl font-semibold text-center text-light-blue mb-4">Ingresos vs Gastos</h2>
          <FinancialChart type="bar" :data="barChartData" :options="barChartOptions" />
        </div>

        <!-- Gráfico de Torta (Distribución de Gastos) -->
        <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <h2 class="text-xl font-semibold text-center text-light-blue mb-4">Distribución de Gastos</h2>
          <FinancialChart type="pie" :data="pieChartData" :options="pieChartOptions" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FinancialChart from '@/components/FinancialChart.vue';
import { ChartData, ChartOptions } from 'chart.js';

export default defineComponent({
  name: 'SummaryView',
  components: {
    FinancialChart,
  },
  setup() {
    // Datos para el gráfico de barras
    const barChartData: ChartData = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
      datasets: [
        {
          label: 'Ingresos',
          data: [5000, 4000, 6000, 5500, 7000],
          backgroundColor: '#3B82F6', // Azul claro
        },
        {
          label: 'Gastos',
          data: [3000, 3500, 4000, 3200, 4500],
          backgroundColor: '#1E3A8A', // Azul marino
        },
      ],
    };

    const barChartOptions: ChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
        },
      },
    };

    // Datos para el gráfico de torta
    const pieChartData: ChartData = {
      labels: ['Comida', 'Transporte', 'Entretenimiento', 'Otros'],
      datasets: [
        {
          label: 'Gastos por Categoría',
          data: [1200, 800, 600, 400],
          backgroundColor: ['#3B82F6', '#1E3A8A', '#6B7280', '#F3F4F6'],
        },
      ],
    };

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
