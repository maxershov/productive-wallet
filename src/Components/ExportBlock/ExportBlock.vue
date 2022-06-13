
<template>
  <div class="exportWrapper">
    <button @click="copyData">CopyToClipboard</button>
    <button @click="enableLoad">LoadData</button>
    <input v-if="loadClicked" v-model="dataBase64" @blur="loadData" />
  </div>
</template>

<script>
import "./ExportBlock.css";

export default {
  name: "exportBlock",
  data() {
    return {
      dataBase64: "",
      loadClicked: false,
    };
  },
  methods: {
    copyData() {
      this.$emit("copyData");
    },
    enableLoad() {
      this.loadClicked = !this.loadClicked;
    },
    loadData() {
        this.$emit('loadData', this.dataBase64);
    },
  },
};
</script>