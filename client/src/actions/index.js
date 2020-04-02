import api from '../api/index';

export const fetchVasts = () => async (dispatch) => {
    const vasts = await api.fetchVasts();

    dispatch({
        type: 'FETCH_VASTS',
        payload: vasts
    });
};

export const fetchVast = async () => {};

export const createVast = async () => {};

export const editVast = async () => {};
