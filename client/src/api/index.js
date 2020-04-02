import axios from 'axios';

const fetchVasts = async () => {
    try {
        const res = await axios({
            method: 'get',
            url: process.env.REACT_APP_API_URL + '/fetch_vasts'
        });

        if(res){
            return res.data.vastIds;
        }
    } catch (e) {
        console.log(e);
    }

    return [];
};

const fetchVast = async (id) => {
    try {
        const res = await axios({
            method: 'get',
            url: process.env.REACT_APP_API_URL + '/fetch_vast',
            params: {
                id
            }
        });

        if(res){
            return res.data;
        }
    } catch (e) {
        console.log(e);
    }

    return null;
};

const updateVast = async (vast) => {
    try {
        const res = await axios({
            method: 'post',
            url: process.env.REACT_APP_API_URL + '/edit_vast',
            data: {
                vastId: vast.id,
                vastUrl: vast.url,
                position: vast.position,
                width: vast.width,
                height: vast.height
            }
        });

        if(res){
            return res;
        }
    } catch (e) {
        console.log(e);
    }

    return null;
};

const createVast = async (vast) => {
    try {
        const res = await axios({
            method: 'post',
            url: process.env.REACT_APP_API_URL + '/create_vast',
            data: {
                vastUrl: vast.url,
                position: vast.position ? vast.position : undefined,
                width: vast.width ? vast.width : undefined,
                height: vast.height ? vast.height : undefined
            }
        });

        if(res){
            return res;
        }
    } catch (e) {
        console.log(e);
    }

    return null;
};

export default {
    fetchVasts,
    fetchVast,
    updateVast,
    createVast
};
