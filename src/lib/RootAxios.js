import axios from 'axios';

export const defaultAxios = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 20000,
    headers: {
        "Request-Client-Type": "A02001",
        "Accept": "application/json",
        "Content-Type": "application/json",
    }
});


// Add a request interceptor
defaultAxios.interceptors.request.use(function (config) {

    return config;

    }, function (error) {

    return Promise.reject(error);
});

// Add a response interceptor
defaultAxios.interceptors.response.use(function (response) {
    if (response) {
        return {
            state: true,
            data: response.data
        };
    }
    return response;

}, function (error) {
    const {
        data,
        status,
    } = error.response;

    const { message } = data;

    if ( status === 401 ) { // 인증 에러.
        return {
            state: false,
            error: error,
            message: "로그인이 필요한 서비스 입니다.",
        }
    }

    if ( message ) { // 에러 메시지가 있을때
        return {
            state: false,
            error: error,
            message: message
        }
    }

    if ( !error.response ) { // 결과가 없을떄?
        return {
            state: false,
            error: error,
            message: "처리중 문제가 발생 했습니다."
        }
    }

    if ( error.response.data ) { // 뭘 해야 할지.
        return error.response.data
    }

    return {
        state: false,
        error: error,
        message: '알수 없는 문제가 발생 했습니다.'
    }

    // return Promise.reject(error);
});

