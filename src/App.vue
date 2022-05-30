<template>
  <div id="app">
    <h3>Hi {{ userName }} !</h3>
    <li class="cards" v-for="task in tasks" :key="task.id">
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
      userName: user.name
    };
  },
};
</script>