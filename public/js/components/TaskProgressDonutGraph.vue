<template>
  <div class="task-progress-donut-graph">
    <canvas id="taskProgressDonutGraph"></canvas>
  </div>
</template>

<script>
import { Doughnut } from 'vue-chartjs'
import { mapGetters } from 'vuex'

export default {
  extends: Doughnut,
  computed: {
    ...mapGetters({
      taskStats: 'task/getTaskStatistics'
    })
  },
  mounted() {
    this.renderChart({
      labels: ['Pending', 'Not Started', 'In Progress', 'On Hold', 'Completed'],
      datasets: [
        {
          label: 'Task Progress',
          backgroundColor: ['#800000', '#808080', '#9ACD32', '#FF0000', '#006400'],
          data: [
            this.taskStats.pending,
            this.taskStats.notStarted,
            this.taskStats.inProgress,
            this.taskStats.onHold,
            this.taskStats.completed
          ]
        }
      ]
    }, { responsive: true, maintainAspectRatio: false })
  }
}
</script>

<style scoped>
.task-progress-donut-graph {
  max-width: 400px;
  margin: auto;
}
</style>