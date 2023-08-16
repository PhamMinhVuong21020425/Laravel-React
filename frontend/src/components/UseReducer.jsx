import React, { useReducer } from 'react';

// useState
// 1. Initial state: 0
// 2. Action: Up (state + 1) / Down (state - 1)

// useReducer
// 1. Initial state: 0
// 2. Action: Up (state + 1) / Down (state - 1)
// 3. Reducer
// 4. Dispatch

// Initial state
const initState = 0;

// Actions
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';

// Reducer
const reducer = (state, action) => {
    console.log('Funcion reducer running...');
    switch (action) {
        case UP_ACTION:
            return state + 1;
        case DOWN_ACTION:
            return state - 1;
        default:
            break;
    }
};

// Dispatch
export default function UseReducer() {
    const [count, dispatch] = useReducer(reducer, initState);

    const handleDown = () => {
        dispatch(DOWN_ACTION);
    };

    const handleUp = () => {
        dispatch(UP_ACTION);
    };

    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleDown}>Down</button>
            <button onClick={handleUp}>Up</button>
        </>
    );
}
