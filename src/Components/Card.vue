<template>
  <div class="wrapper">
    <h1>{{ task.title }}</h1>
  </div>
</template>

<script>
import "./Card.css";

export default {
  name: "card",
  props: ["task"],
};
</script>