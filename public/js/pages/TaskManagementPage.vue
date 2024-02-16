<template>
  <div class="task-management-page">
    <shadcn-button @click="showAddTaskModal = true" type="primary">Add Task</shadcn-button>
    <shadcn-table :data="tasks">
      <shadcn-table-column prop="name" label="Task Name"></shadcn-table-column>
      <shadcn-table-column prop="description" label="Description"></shadcn-table-column>
      <shadcn-table-column prop="status" label="Status"></shadcn-table-column>
      <shadcn-table-column label="Actions">
        <template v-slot="{ row }">
          <shadcn-button @click="editTask(row)" type="warning">Edit</shadcn-button>
          <shadcn-button @click="deleteTask(row.id)" type="danger">Delete</shadcn-button>
        </template>
      </shadcn-table-column>
    </shadcn-table>
    <shadcn-modal v-model="showAddTaskModal" title="Add Task">
      <shadcn-form @submit.prevent="addTask">
        <shadcn-form-item label="Task Name">
          <shadcn-input v-model="taskForm.name"></shadcn-input>
        </shadcn-form-item>
        <shadcn-form-item label="Description">
          <shadcn-input v-model="taskForm.description"></shadcn-input>
        </shadcn-form-item>
        <shadcn-form-item>
          <shadcn-button type="primary" htmlType="submit">Submit</shadcn-button>
        </shadcn-form-item>
      </shadcn-form>
    </shadcn-modal>
  </div>
</template>

<script>
import { Button, Table, TableColumn, Modal, Form, FormItem, Input } from 'shadcn-ui';
import apiClient from '../plugins/axios';

export default {
  name: 'TaskManagementPage',
  components: {
    ShadcnButton: Button,
    ShadcnTable: Table,
    ShadcnTableColumn: TableColumn,
    ShadcnModal: Modal,
    ShadcnForm: Form,
    ShadcnFormItem: FormItem,
    ShadcnInput: Input
  },
  data() {
    return {
      tasks: [],
      showAddTaskModal: false,
      taskForm: {
        name: '',
        description: ''
      }
    };
  },
  methods: {
    fetchTasks() {
      apiClient.getTaskDetails().then(response => {
        this.tasks = response.data;
      });
    },
    addTask() {
      apiClient.addTask(this.taskForm).then(() => {
        this.showAddTaskModal = false;
        this.fetchTasks();
      });
    },
    editTask(task) {
      // Implementation for editing a task
    },
    deleteTask(taskId) {
      apiClient.deleteTask(taskId).then(() => {
        this.fetchTasks();
      });
    }
  },
  created() {
    this.fetchTasks();
  }
}
</script>

<style scoped>
.task-management-page {
  padding: 20px;
}
</style>
