const { default: axios } = require("axios")

const baseUrl = 'https://map-my-aadhaar.herokuapp.com/'



axios.interceptors.request.use((config) => {
    const token = localStorage.getItem("app_access_token");
    if (token) {
        config.headers['Authorization'] = 'Bearer ' + token;
    }


    config.headers['Content-Type'] = 'application/json';
    return config;
},
    (error) => {
        Promise.reject(error);
    }
);


axios.interceptors.response.use((response) => {
    return response;
},

);



export const loginUser = async (apiBody) => {
    const newUrl = `${baseUrl}generate-token`
    const res = await axios.post(newUrl, apiBody);
    return res;
}
export const signUpUser = async (apiBody) => {
    const newUrl = `${baseUrl}v1/user/normal/signup`
    const res = await axios.post(newUrl, apiBody);
    return res;
}