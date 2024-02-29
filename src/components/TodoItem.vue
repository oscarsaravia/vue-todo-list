<script setup lang="ts">
    import { store } from '@/store/store';
    import { type Todo } from '../interfaces/Todo';

    defineProps({
        toDo : Object as () => Todo
    });
</script>

<template>
    <div class="todo-item">
        <label
            class="radio-label"
            @click="store.removeTodo(toDo?.id ?? '')">
            <input type="radio" name="check">   
        </label>
        <p class="todo-text">{{ toDo?.text }}</p>
    </div>
</template>

<style scoped>
    .todo-item {
        display: flex;
        justify-content: left;
        align-items: center;
        width: 80%;
        height: 50px;
        margin: 10px 0;
        border-radius: 10px;
        border: 2px solid black;
        margin: 0 0 10px 0;
        padding: 10px;
        font-size: 1.3rem;
    }
    .radio-label {
        margin-right: 10px;
    }
    .todo-text {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
</style>
