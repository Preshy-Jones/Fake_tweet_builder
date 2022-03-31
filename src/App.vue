<template>
  <Tweet />
  <Form />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Tweet from "./components/Tweet.vue";
import Form from "./components/Form.vue";

export default defineComponent({
  name: "App",
  components: { Tweet, Form },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
>
