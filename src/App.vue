<template>
  <div id="app">
    <h3>Hi {{ userName }} !</h3>
    <div v-if="data">
      <p>{{ data }}</p>
      <li class="cards" v-for="task in data.Tasks" :key="task.id">
        <Card :task="task" />
      </li>
    </div>
    <button @click="addTask">Add task</button >
  </div>
</template>

<script>
import Card from "./Components/Card";
import "./App.css";
import { User } from "./Classes/User";
import { getData } from "./BFF";

const user = new User("Max");

export default {
  components: { Card },
  data() {
    return {
      data: null,
      userName: user.name,
    };
  },
  created() {
    user.getTasks().then((data) => (this.data = data));
  },
  methods: {
    addTask: () => {
      const newTask =  {
      date: "2022-06-19T21:00:00.000Z",
      ID: 3,
      type: "TASK",
      userId: 1,
      title: "NEW TASK",
      price: 1000,
    };
      user.addTask(newTask)
      console.log(user.tasks)
    }
  }
};
</script>