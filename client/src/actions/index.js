import api from '../api/index';

export const fetchVasts = () => async (dispatch) => {
    const vasts = await api.fetchVasts();

    dispatch({
        type: 'FETCH_VASTS',
        payload: vasts
    });
};

export const fetchVast = (id) => async (dispatch) => {
    const vast = await api.fetchVast(id);

    dispatch({
        type: 'FETCH_VAST',
        payload: vast
    });
};

export const createVast = (vast) => async (dispatch) => {
    const res = await api.createVast(vast);

    dispatch({
        type: 'CREATE_VAST',
        payload: {
            vast: res.data,
            status: res.status
        }
    });
};

export const updateVast = (vast) => async (dispatch) => {
    const res = await api.updateVast(vast);

    dispatch({
        type: 'UPDATE_VAST',
        payload: {
            vast: res.data,
            status: res.status
        }
    });
};

export const toggleCreateVastForm = (isOpen = false) => {
    return {
        type: 'TOGGLE_CREATE_FORM',
        payload: isOpen
    };
};

export const toggleUpdateVastForm = (id = null) => {
    return {
        type: 'TOGGLE_UPDATE_FORM',
        payload: id
    };
};
