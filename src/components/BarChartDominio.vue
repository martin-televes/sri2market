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
import { Chart as ChartJS, Title, Tooltip, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  computed: {
    datos() {
      return this.$store.getters.getTuplaDominios.map(dato => parseFloat(dato));
    },
    filteredData() {
      return this.datos.filter(value => value >= 0);
    },
    chartData() {
      const labels = [
        'Calefacción', 'ACS', 'Refrigeración', 'Ventilación', 
        'Iluminación', 'Envolvente dinámica', 'Electricidad', 
        'Carga de vehículos eléctricos', 'Monitorización y control'
      ];

      const filteredLabels = labels.filter((_, index) => this.datos[index] >= 0);
      const backgroundColors = this.filteredData.map(() => 'rgba(222, 75, 75, 0.3)');
      const borderColors = this.filteredData.map(() => 'rgba(255, 50, 50, 1)');

      return {
        labels: filteredLabels,
        datasets: [{
          data: this.filteredData,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1
        }]
      };
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
            text: 'Puntuaciones de dominios',
            font: {
              size: 28,
              weight: 'bold'
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
    },
    chartHeight() {
      const numOfBars = this.filteredData.length;
      return `${4.2 * numOfBars}vw`;
    }
  }
}
</script>



<style scoped>
.chart-container {
    padding-top: 1vw;
    height: 72vh;
}
</style>
