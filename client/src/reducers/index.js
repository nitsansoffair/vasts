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
                createdStatus: action.payload.status,
                updatedStatus: null,
                vastUrl: action.payload.vast.url,
                formCreate: action.payload.status !== 201,
                vasts: [
                    action.payload.vast,
                    ...state.vasts
                ]
            };
        case 'UPDATE_VAST':
            return {
                ...state,
                updatedStatus: action.payload.status,
                createdStatus: null,
                vastUrl: action.payload.vast.url,
                formEditId: action.payload.status === 200 ? null : state.formEditId,
                vasts: state.vasts.map(vast => vast.id === action.payload.vast.id ? action.payload.vast : vast)
            };
        case 'TOGGLE_CREATE_FORM':
            return {
                ...state,
                formCreate: action.payload,
                createdStatus: null,
                updatedStatus: null,
                vastUrl: null
            };
        case 'TOGGLE_UPDATE_FORM':
            return {
                ...state,
                formEditId: action.payload,
                createdStatus: null,
                updatedStatus: null,
                vastUrl: null
            };
        default: {
            return state;
        }
    }
};

export default vastsReducer;
