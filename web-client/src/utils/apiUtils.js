const axios = require('axios');

const commonAxios = axios.create({
    baseURL: "http://localhost:8080/"
});

commonAxios.interceptors.response.use(function (response) {
    const { data } = response;
    
    if (data.code != 0) {
        const error = new Error(data.message || 'Uknown error.');
        error.data = data.data;
        throw error;
    }
    return data.data;
    // return sleep(100, data.data); all sleep function in every method deleted

}, function (error) {
    return Promise.reject(error);
});


export { commonAxios };