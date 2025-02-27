import { ChartData } from 'chart.js';

// Datos para el gráfico de barras
export const barChartData: ChartData = {
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

// Datos para el gráfico de torta
export const pieChartData: ChartData = {
  labels: ['Comida', 'Transporte', 'Entretenimiento', 'Otros'],
  datasets: [
    {
      label: 'Gastos por Categoría',
      data: [1200, 800, 600, 400],
      backgroundColor: ['#3B82F6', '#1E3A8A', '#6B7280', '#F3F4F6'],
    },
  ],
};
