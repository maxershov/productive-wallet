<template>
  <div class="editWrapper">
      <p>{{task}}</p>
      <p>{{editedTask}}</p>
      <input v-model="editedTask.title"/>
      <input v-model="editedTask.price"/>
      <button @click="save">Save</button>
      <button @click="cancel">Cancel</button>
  </div>
</template>

<script>
import "./Edit.css";

export default {
  name: "edit",
  props: ["task"],
    data() {
    return {
      editedTask: {...this.task}
    };
  },
  methods: {
      save(){
          console.log('save')
          this.$emit("save", this.editedTask);
      },
      cancel(){
          this.$emit("cancel");
      }
  }
};
</script>