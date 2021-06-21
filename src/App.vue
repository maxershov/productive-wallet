<template>
  <div id="app">
    <li v-for="task in tasks" :key="task.id">
      <Card :task="task" />
    </li>
  </div>
</template>

<script>
import Card from "./Components/Card";
import "./App.css";
import { User } from "./Classes/User";

const user = new User("Max");

export default {
  components: { Card },
  data() {
    return {
      tasks: user.getTasks(),
    };
  },
};
</script>