<script setup lang="ts">
  import { onMounted, watch } from 'vue';

  import { store } from '@/store/store';
  import TodoInput from '@/components/TodoInput.vue';
  import TodoList from '@/components/TodoList.vue';

  onMounted(() => {
    // Get items from localStorage
    const todos = localStorage.getItem('todos');
    if (todos) store.todos = JSON.parse(todos);
  });

  // Watch for changes in todos and save to localStorage
  watch(store.todos, (newVal) => {
    localStorage.setItem('todos', JSON.stringify(newVal));
  });

</script>

<template>
  <h1 class="title"><span style="color: red; font-weight: bold;">TODO</span>-LIST</h1>
  <div class="main-container">
    <TodoInput />
    <TodoList />
  </div>
</template>

<style scoped>
  .title {
    color: #283618;
    text-align: center;
    font-size: 3rem;
    margin: 20px 0;
    font-weight: bold;
  }
  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin: 0 auto;
  }
</style>