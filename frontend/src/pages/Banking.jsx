import React, { useState } from 'react';
import { createStore } from '../util/store';

function reducer(state = 0, action) {
    switch (action.type) {
        case 'DEPOSIT':
            return state + action.payload;
        case 'WITHDRAW':
            return state - action.payload;
        default:
            return state;
    }
}

const store = createStore(reducer);

// Actions
function actionDeposit(payload) {
    return {
        type: 'DEPOSIT',
        payload,
    };
}

function actionWithdraw(payload) {
    return {
        type: 'WITHDRAW',
        payload,
    };
}

const Banking = () => {
    const [state, setState] = useState(0);

    store.subscribe(() => {
        setState(store.getState());
    });

    return (
        <>
            <h1>{state}</h1>
            <button onClick={() => store.dispatch(actionWithdraw(10))}>
                Withdraw
            </button>
            <button onClick={() => store.dispatch(actionDeposit(10))}>
                Deposit
            </button>
        </>
    );
};

export default Banking;
