<template>
  <div class="task-progress-trend-graph">
    <canvas id="taskProgressTrendGraphCanvas"></canvas>
  </div>
</template>

<script>
import { Line } from 'vue-chartjs'
import { mapGetters } from 'vuex'

export default {
  extends: Line,
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    }
  },
  computed: {
    ...mapGetters({
      taskProgressData: 'task/getTaskProgressData'
    })
  },
  mounted() {
    this.renderChart({
      labels: this.taskProgressData.labels,
      datasets: [
        {
          label: 'Total Tasks',
          backgroundColor: 'rgba(0, 128, 0, 0.2)',
          borderColor: 'rgba(0, 128, 0, 1)',
          data: this.taskProgressData.totalTasks,
          fill: false
        },
        {
          label: 'Delayed Tasks',
          backgroundColor: 'rgba(255, 0, 0, 0.2)',
          borderColor: 'rgba(255, 0, 0, 1)',
          data: this.taskProgressData.delayedTasks,
          fill: false
        }
      ]
    }, this.options)
  }
}
</script>

<style scoped>
.task-progress-trend-graph {
  width: 100%;
  height: 400px;
}
</style>