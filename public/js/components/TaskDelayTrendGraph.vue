<template>
  <div class="task-delay-trend-graph">
    <canvas id="taskDelayTrendCanvas"></canvas>
  </div>
</template>

<script>
import { Doughnut } from 'vue-chartjs'
import { mapGetters } from 'vuex'

export default {
  extends: Doughnut,
  computed: {
    ...mapGetters({
      taskData: 'task/getTaskData'
    })
  },
  mounted() {
    this.renderChart({
      labels: ['Pending', 'Not Started', 'In Progress', 'On Hold', 'Completed'],
      datasets: [
        {
          label: 'Task Delay',
          backgroundColor: ['#800000', '#808080', '#9ACD32', '#FF0000', '#006400'],
          data: this.calculateDelayData(this.taskData)
        }
      ]
    }, { responsive: true, maintainAspectRatio: false })
  },
  methods: {
    calculateDelayData(taskData) {
      // Placeholder for delay calculation logic
      // This should calculate the delay based on the taskData provided
      // and return an array of numbers corresponding to the labels
      return taskData.map(task => {
        const delay = this.calculateTaskDelay(task);
        return delay;
      });
    },
    calculateTaskDelay(task) {
      // Placeholder for individual task delay calculation
      // This should return the number of days delayed for a task
      const deadlineDate = new Date(task.deadlineDate);
      const completionDate = task.completionDate ? new Date(task.completionDate) : new Date();
      const delay = (completionDate - deadlineDate) / (1000 * 60 * 60 * 24);
      return delay > 0 ? delay : 0;
    }
  }
}
</script>

<style scoped>
.task-delay-trend-graph {
  position: relative;
  width: 100%;
  height: 300px;
}
</style>