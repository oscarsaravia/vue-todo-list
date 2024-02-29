<script setup lang="ts">
  import { ref } from 'vue';
  import { v4 as uuidv4 } from 'uuid';

  import { store } from '@/store/store';

  // Text input state
  const newTodo = ref('');

  // Add a new todo
  const addTodo = () => {
    store.addTodo({
      id: uuidv4(),
      text: newTodo.value,
      done: false
    });
    newTodo.value = '';
  };

</script>

<template>
  <form class="todo-form" @submit.prevent="addTodo">
    <input
    class="todo-input"
      type="text"
      placeholder="Add a new task..."
      v-model="newTodo"
    />
    <button class="submit-button" type="button" @click="addTodo">Add</button>
  </form>
</template>

<style scoped>
  .todo-input {
    border-radius: 10px;
    padding: 10px;
    width: 80%;
    font-size: 1.5rem;
  }
  .todo-form {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    margin-bottom: 20px;
  }
  .submit-button {
    border-radius: 10px;
    padding: 10px;
    width:100px;
    font-size: 1.5rem;
    margin-left: 10px;
    background-color: #4F46E5;
    border: 1px solid black;
    color: white;
  }
  .todo-input, .todo-button {
    height: 50px;
  }
  .todos-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
</style>
