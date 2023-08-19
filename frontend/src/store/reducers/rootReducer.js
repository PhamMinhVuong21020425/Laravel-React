const initState = {
    users: [
        { id: 0, name: 'John' },
        { id: 1, name: 'Kane' },
    ],
};

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER': {
            const users = state.users.filter(
                user => user.id !== action.payload.id
            );
            return {
                ...state,
                users,
            };
        }
        case 'ADD_USER': {
            let users = [...state.users];
            users.push({
                id: users.length,
                name: action.payload,
            });
            console.log('Running in ADD_USER: ', users);
            return {
                ...state,
                users,
            };
        }
        default:
            return state;
    }
};

export default rootReducer;
