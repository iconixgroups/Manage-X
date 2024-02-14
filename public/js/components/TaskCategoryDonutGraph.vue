<template>
  <div class="task-category-donut-graph">
    <canvas id="taskCategoryDonutChart"></canvas>
  </div>
</template>

<script>
import { Doughnut } from 'vue-chartjs'
import { mapGetters } from 'vuex'

export default {
  name: 'TaskCategoryDonutGraph',
  extends: Doughnut,
  computed: {
    ...mapGetters({
      projectCategories: 'project/getProjectCategories'
    })
  },
  mounted() {
    this.renderChart({
      labels: this.projectCategories.map(category => category.name),
      datasets: [
        {
          label: 'Task Categories',
          backgroundColor: this.projectCategories.map(category => category.color),
          data: this.projectCategories.map(category => category.taskCount)
        }
      ]
    }, {
      responsive: true,
      maintainAspectRatio: false
    })
  }
}
</script>

<style scoped>
.task-category-donut-graph {
  position: relative;
  width: 100%;
  height: 300px;
}
</style>