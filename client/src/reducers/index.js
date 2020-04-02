const vastsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_VASTS':
            return {
                ...state,
                vasts: action.payload
            };
        case 'FETCH_VAST':
            return {
                ...state,
                vast: action.payload
            };
        case 'CREATE_VAST':
            return {
                ...state,
                created: action.payload
            };
        case 'UPDATE_VAST':
            return {
                ...state,
                updated: action.payload
            };
        default: {
            return state;
        }
    }
};

export default vastsReducer;
