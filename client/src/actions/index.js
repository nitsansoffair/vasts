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
        payload: res
    });
};

export const updateVast = (vast) => async (dispatch) => {
    const res = await api.updateVast(vast);

    dispatch({
        type: 'UPDATE_VAST',
        payload: res
    });
};
