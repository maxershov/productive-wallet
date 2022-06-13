<template>
  <div id="app">
    <p>{{ user }}</p>
    <h3>Hi {{ user.name }} !</h3>
    <div v-if="chosenCard">
      <Edit @save="saveTask" @cancel="cancelEdit" :task="chosenCard" />
    </div>
    <div v-if="user.tasks">
      <ExportBlock @copyData="copyData" @loadData="loadData" />
      <li class="cards" v-for="task in user.tasks" :key="task.id">
        <Card :task="task" @edit="editCard" />
      </li>
    </div>
    <button @click="addTask">Add task</button>
  </div>
</template>

<script>
import Card from "./Components/Card/Card";
import ExportBlock from "./Components/ExportBlock/ExportBlock";
import Edit from "./Components/Edit/Edit";

import "./App.css";
import { User } from "./Classes/User";
import { Task } from "./Classes/Task";

export default {
  components: { Card, ExportBlock, Edit },
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