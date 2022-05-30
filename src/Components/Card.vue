<template>
  <div class="wrapper">
    <p class="title">{{ task.title }}</p>
    <p>{{ task.price }} </p>
    <p>{{ task.date }} </p>
  </div>
</template>

<script>
import "./Card.css";

export default {
  name: "card",
  props: ["task"],
};
</script>