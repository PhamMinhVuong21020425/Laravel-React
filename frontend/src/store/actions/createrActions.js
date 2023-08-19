import { createAction, nanoid } from '@reduxjs/toolkit';

const addTodo = createAction('todos/add', function prepare(text) {
    return {
        payload: {
            text,
            id: nanoid(),
            createdAt: new Date().toISOString(),
        },
    };
});

console.log(addTodo('Write more docs'));
