<script setup lang="ts">
    import { store } from '../store/store';
    import TodoItem from './TodoItem.vue';
</script>

<template>
    <div class="todos-container">
        <TodoItem v-for="item in store.todos" :key="item.id" :toDo="item" />
    </div>
</template>

<style scoped>
    .todos-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
</style>
