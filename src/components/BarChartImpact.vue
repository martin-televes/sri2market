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
    datos() { return this.$store.getters.getTuplaCriteriosImpacto },
    chartData() {
        return {
            labels: [ 'Eficiencia energética', 'Mantenimiento y predicción de fallos', 'Confort', 'Conveniencia', 'Salud y bienestar', 'Información a ocupantes', 'Flexibilidad y almacenamiento energético' ],
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
              tooltip: {
                callbacks: {
                  label: function(context) {
                    let label = context.dataset.label || '';
                    if (label) {
                      label += ': ';
                    }
                    label += context.parsed.y.toFixed(1) + '%';
                    return label;
                  }
                }
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
  width: 45%;
  height: 35vw;
}
</style>