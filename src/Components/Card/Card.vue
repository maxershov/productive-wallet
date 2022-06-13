<template>
  <div class="wrapper">
    <p class="title">{{ task.title }}</p>
    <button class="complete">+</button>
    <button class="edit">⚙</button>
    <p class="description">{{ "task.descriptions" }}</p>
    <p v-if="task.price" class="price">{{ task.price }}</p>
    <progress
      v-if="progress"
      class="progress"
      :max="progress.max"
      :value="progress.value"
    />
  </div>
</template>

<script>
import "./Card.css";

export default {
  name: "card",
  props: ["task"],
  computed: {
    progress() {
      return { max: 100, value: 70 };
    },
  },
};
</script>