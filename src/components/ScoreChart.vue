<template>
    <div class="chart-container" :style="{ width: chartWidth }">
      <Bar
        id="my-chart-id"
        :options="chartOptions"
        :data="chartData"
      />
    </div>
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'BarChart',
    components: { Bar },
    computed: {
      datos() { return this.$store.getters.getSRI },
      chartData() {
          return {
              datasets: [{
                  data: this.datos,
                  backgroundColor: [ // Define aquí los colores de las barras
                      'rgba(75, 222, 125, 0.3)',
                      'rgba(75, 222, 125, 0.3)',
                      'rgba(75, 222, 125, 0.3)',
                      'rgba(75, 222, 125, 0.3)',
                      'rgba(75, 222, 125, 0.3)',
                      'rgba(75, 222, 125, 0.3)',
                      'rgba(75, 222, 125, 0.3)'
                  ],
                  borderColor: [ // Define aquí los colores del borde de las barras
                      'rgba(75, 192, 192, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(75, 192, 192, 1)'
                  ],
                  borderWidth: 1 // Define aquí el ancho del borde de las barras
              }]
          }
      },
      chartOptions() {
          return {
              scales: {
                  y: {
                      max: 100,
                      beginAtZero: true
                  }
              },
              plugins: {
                title: {
                    display: true,
                    text: 'Puntuaciones de criterios de impacto',
                    font: {
                          size: 28, // Tamaño de la fuente del título
                          weight: 'bold' // Peso de la fuente del título (por ejemplo: 'normal', 'bold', 'lighter', etc.)
                      }
                },
                afterDraw: (chart) => {
                  const ctx = chart.ctx;
                  const xAxis = chart.scales['x-axis-0'];
                  const yAxis = chart.scales['y-axis-0'];
                  const areaColors = [
                    { range: [0, 20], color: 'rgba(75, 222, 125, 0.3)' },
                    { range: [20, 35], color: 'rgba(125, 222, 75, 0.3)' },
                    { range: [35, 50], color: 'rgba(175, 222, 25, 1)' },
                    { range: [50, 65], color: 'rgba(222, 222, 75, 0.3)' },
                    { range: [65, 80], color: 'rgba(222, 175, 25, 0.3)' },
                    { range: [80, 90], color: 'rgba(222, 125, 75, 0.3)' },
                    { range: [90, 100], color: 'rgba(222, 75, 125, 0.3)' }
                  ];
  
                  areaColors.forEach(area => {
                    const yMin = yAxis.getPixelForValue(area.range[0]);
                    const yMax = yAxis.getPixelForValue(area.range[1]);
  
                    ctx.fillStyle = area.color;
                    ctx.fillRect(xAxis.left, yMax, xAxis.width, yMin - yMax);
                  });
                }
              },
              responsive: true,
              maintainAspectRatio: false,
              width: this.chartWidth
          }
      },
      chartWidth() {
        return `40vw`;
      }
    }
  }
  </script>
  
  <style scoped>
  .chart-container {
    padding: 1vw; /* Ajusta este valor según sea necesario */
    width: 50%;
    height: 35vw;
  }
  </style>
  