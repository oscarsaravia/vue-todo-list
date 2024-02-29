<script setup lang="ts">
import { ref } from 'vue'
  const newTodo = ref('');
</script>

<template>
  <form action="">
    <input
      type="text"
      placeholder="Add a new task..."
      v-model="newTodo"
    />
    <button>Add</button>
  </form>
  <h1>{{ newTodo }}</h1>
</template>

<style scoped>
  input {
    border-radius: 10px;
    padding: 10px;
    width: 70%;
    font-size: 1.5rem;
  }
  form {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
  }
  button {
    border-radius: 10px;
    padding: 10px;
    width:100px;
    font-size: 1.5rem;
    margin-left: 10px;
    background-color: #BC6C25;
  }
  input, button {
    height: 50px;
  }
</style>
