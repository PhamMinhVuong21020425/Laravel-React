// REDUCERS
const initState = { value: 0 };
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                value: state.value + 1,
            };
        case 'DECREMENT':
            return {
                ...state,
                value: state.value - 1,
            };
        default:
            return state;
    }
};

// ACTIONS
const INCREMENT = {
    type: 'INCREMENT',
    payload: 10,
};

// Action creator
const incrementCreator = data => {
    return {
        type: 'INCREMENT',
        payload: data,
    };
};

// DISPATCH: Chuyển action vào hàm reducer và thực thi hàm reducer trả về state mới
function dispatch(action) {
    state = reducer(state, action);
}
