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

export default {
    fetchVasts,
    fetchVast
};
