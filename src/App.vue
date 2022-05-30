<template>
  <div id="app">
    <p>{{data}}</p>
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
import { getData } from "./BFF";

const user = new User("Max");

export default {
  components: { Card },
  data() {
    return {
      tasks: user.getTasks(),
      userName: user.name,
      data: null
    };
  },
  mounted () {
    getData().then(data => this.data = data)
   }
};
</script>