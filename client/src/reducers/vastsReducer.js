export default (vasts = [], action) => {
    if(action.type === 'FETCH_VASTS'){
        return action.payload;
    }

    return vasts;
};
