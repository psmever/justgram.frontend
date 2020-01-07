import axios from 'axios';

// https://levelup.gitconnected.com/a-typescript-safe-api-82cc22c4f92d

// const authAxios = axios.create({
//     baseURL: process.env.REACT_APP_API_URL,
//     timeout: 20000,
//     headers: {
//         "Request-Client-Type": "A02001",
//         "Accept": "application/json",
//         "Content-Type": "application/json",
//         "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiZjYzODBhYjliM2I0MGFmN2M4ODJjYTI1ODc1YTc4NTVhM2RkMzQ3OTIzNzZiMDY0NmQ1YTQ0ZDJjMmE4YjY1ZmQxNzY4OTk3ODc0ZDFiNjUiLCJpYXQiOjE1NzgzMTc4NDIsIm5iZiI6MTU3ODMxNzg0MiwiZXhwIjoxNTc4MzE5NjQyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.i7kF6e7_6qrl2e5GunzgZ3apweKjN4tx4X4lD1joKzm7zeTEXxlmXO8Ik5WnJG9PQ7J_94KSPeJQDxpCHgJiO7r-cMQwgrjLxC4Z3tAhqMj4Y1zvgJW7VmZZToPWQnnYrox6qUixNxFGkbNGxjp_-hGxrM6G6BgDOebtWxjtkfZG4kxYydYFWgvydHVY1vbrQf1Hbk8GYMxN_rezNQu5cOW7a5IlIeH2pYrbVeIn602pAIBvoyEX3gHCtTjfia9Zghf2eAUd_WZZ_yt66d5nOwxcmsfNGlveUwiN_iRaEKcocCatcF8xICVLyHt5zqSkg3YfCmmBJFdyrvJfhlRzooD-0VvzUbkmKpHMRafzA7ItOGibpCIaLisgPcoScDvza-nVS9fZzxLoIrwL7z60lWnnlFjf2qjbdQrqJYBSGOJ9zSGOehaXNTPxLhWntalPuXzw2rhX_DoPHvjNQr2Mw4P0xETzz5HNJNetZ80bQvkJmolqpM8yHkp_Xh0DIeNk1E6c_ZzPEXSV0JGiXsp_sbepzZlGGtdP1T1bCwJm9JDnhzl0T87k4HJfG1NidOWU_osS6lAkIX1KUTRK5vACZM-NA7QQLtrmHWoCmOELe2rE0kmkl5o6s2lX6vaZ6fPEADP0VXP6xwpMbB_mh3EjI_Q3u91NG79TKulx9I9oM2Q"
//     }
// });

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

    if ( !error.response ) { // 결과가 없을떄?
        return {
            state: false,
            message: "처리중 문제가 발생 했습니다."
        }
    }

    if ( status === 401 ) { // 인증 에러.
        return {
            state: false,
            message: "로그인이 필요한 서비스 입니다."
        }
    }
    if ( message ) { // 에러 메시지가 있을
        return {
            state: false,
            message: message
        }
    }
    if ( error.response.data ) { // 뭘 해야 할지.
        return error.response.data
    }

    return Promise.reject(error);
});

