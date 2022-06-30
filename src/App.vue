<template>
  <div id="app">
    <p>{{ user }}</p>
    <h3>Hi {{ user.name }} !</h3>
    <div v-if="chosenCard">
      <Edit @save="saveTask" @cancel="cancelEdit" :task="chosenCard" />
    </div>
    <div v-if="user.tasks">
      <li class="cards" v-for="task in user.tasks" :key="task.id">
        <Card :task="task" @edit="editCard" />
      </li>
    </div>
    <button @click="addTask">Add task</button>
  </div>
</template>

<script>
import Card from "./Components/Card/Card";
import Edit from "./Components/Edit/Edit";

import "./App.css";
import { User } from "./Classes/User";
import { Task } from "./Classes/Task";

export default {
  components: { Card, Edit },
  data() {
    return {
      dataProps: null,
      user: null,
      chosenCard: null,
    };
  },

  created() {
    this.user = new User();
  },

  methods: {
    addTask() {
      const newTask = {
        date: "2022-06-19T21:00:00.000Z",
        ID: 3,
        type: "TASK",
        userId: 1,
        title: "NEW TASK",
        price: 1000,
      };
      this.user.addTask(newTask);
      console.log(this.user.tasks);
    },
    loadData(value) {
      console.log(value);
      this.user.saveData(value);
    },

    editCard(value) {
      this.chosenCard = this.user.getTaskByID(value);
    },

    saveTask(value) {
      console.log(value);
      this.$set(this.user, this.user.updateTask(value));
      this.chosenCard = null;
    },
    cancelEdit() {
      this.chosenCard = null;
    },
  },
};
</script>