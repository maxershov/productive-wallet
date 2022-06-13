<template>
  <div class="edit">
      <input v-model="task.title"/>
      <input />
  </div>
</template>

<script>
import "./Edit.css";

export default {
  name: "edit",
  props: ["task"]
};
</script>