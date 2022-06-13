<template>
  <div id="app">
    <h3>Hi {{ user.name }} !</h3>
    <div v-if="dataProps">
      <ExportBlock @copyData="copyData" @loadData="loadData" />
      <li class="cards" v-for="task in dataProps.Tasks" :key="task.id">
        <Card :task="task" />
      </li>
    </div>
    <button @click="addTask">Add task</button>
  </div>
</template>

<script>
import Card from "./Components/Card/Card";
import ExportBlock from "./Components/ExportBlock/ExportBlock";

import "./App.css";
import { User } from "./Classes/User";

export default {
  components: { Card, ExportBlock },
  data() {
    return {
      dataProps: null,
      user: null,
    };
  },

  created() {
    this.user = new User("Max");
    // this.user.getTasks().then((data) => (this.dataProps = data));
    this.dataProps = this.user.getTasks();
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
    copyData() {
      // TODO: move to helpers
      const el = document.createElement("textarea");
      const stringData = JSON.stringify(this.dataProps);
      el.value = Buffer.from(stringData).toString("base64");
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      const selected =
        document.getSelection().rangeCount > 0
          ? document.getSelection().getRangeAt(0)
          : false;
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
      }
    },
    loadData(value) {
      console.log(value);
      this.user.saveData(value);
    },
  },
};
</script>