import { reactive } from 'vue';
import { type Todo } from '../interfaces/Todo';

export const store = reactive({

    todos: [] as Todo[],

    // Take a Todo object and add it to the todos array
    addTodo: (todo: Todo) => {
        if (todo.text !== '') store.todos.push(todo)
        // Update LocalStorage
        localStorage.setItem('todos', JSON.stringify(store.todos));
    },

    // Remove a Todo object from list based on its id
    removeTodo: (id: string) => {
        const index = store.todos.findIndex(todo => todo.id === id);
        store.todos.splice(index, 1);
        // Update LocalStorage
        localStorage.setItem('todos', JSON.stringify(store.todos));
    },
})
