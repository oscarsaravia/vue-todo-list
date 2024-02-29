<script setup lang="ts">
import TodoInput from '@/components/TodoInput.vue';

</script>

<template>
  <div class="main-container">
    <TodoInput />
  </div>
</template>

<style scoped>
  h1 {
    color: #283618;
  }
  p {
    color: #606C38;
  }
  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
  }
</style>