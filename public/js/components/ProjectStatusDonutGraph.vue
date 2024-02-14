<template>
  <div class="project-status-donut-graph">
    <canvas id="projectStatusDonutGraph"></canvas>
  </div>
</template>

<script>
import { Doughnut } from 'vue-chartjs'
import { mapGetters } from 'vuex'

export default {
  extends: Doughnut,
  computed: {
    ...mapGetters({
      projectStatusData: 'project/getProjectStatusData'
    })
  },
  mounted() {
    this.renderChart({
      labels: ['Pending', 'Not Started', 'In Progress', 'On Hold', 'Completed'],
      datasets: [
        {
          label: 'Project Status',
          backgroundColor: ['#800000', '#808080', '#9ACD32', '#FF0000', '#006400'],
          data: this.projectStatusData
        }
      ]
    }, { responsive: true, maintainAspectRatio: false })
  }
}
</script>

<style scoped>
.project-status-donut-graph {
  position: relative;
  width: 100%;
  height: 300px;
}
</style>