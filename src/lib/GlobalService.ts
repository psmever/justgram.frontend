import axios ,{
    AxiosInstance,
    AxiosPromise,
    AxiosResponse
} from 'axios';

import * as _TYPES from 'modules/commonTypes';
import * as Helper from 'lib/Helper';
import GlobalAlert from 'lib/GlobalAlert';
import history from 'routes/History';

export interface tokenRefreshInterface {
    state: boolean;
    data?: {
        token_type?: string;
        expires_in?: number;
        access_token?: string;
        refresh_token?: string;
        user_name?: string;
    }
    message?: string;
}

export interface apiRequest {
    authType: boolean;
    method: 'get'|'post'|'delete'|'put';
    endpoint: string;
    payload: any
}

export const _Axios_ = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 20000,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Request-Client-Type": "A02001",
        "Accept": "application/json",
        "Content-Type": "application/json",
    }
});

const retryOriginalRequest = (originalRequest: any) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(_Axios_(originalRequest)), 1000);
    });
};

_Axios_.interceptors.request.use(function (config) {
    const login_access_token = Helper.cookieManager.get('login_access_token');

    if(login_access_token) {
        config.headers.Authorization = 'Bearer ' + login_access_token;
    } else {
        config.headers.Authorization = '';
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

_Axios_.interceptors.response.use(function (response) : any {
    return Promise.resolve({
        state: true,
        data: response.data
    });
}, function (error) {
    const { config, config: { headers:{ Authorization } }, response: { status, data }} = error;

    if(status === 401 && Authorization.length === 0) {
        GlobalAlert.thenHistoryPush({
            text: '다시 로그인해 주세요.',
            push_router: '/login'
        });
    }

    if(status === 500 && Authorization.length > 0) {
        GlobalAlert.thenHistoryPush({
            text: '다시 로그인해 주세요.',
            push_router: '/login'
        });
    }

    if(status === 401 && Authorization.length > 0) {
        console.debug(':: try token refresh ::');
        const originalRequest = config;
        return new Promise((resolve, reject) => {
            _Axios_.post('/api/justgram/v1/token/refresh', {refresh_token:Helper.cookieManager.get('login_refresh_token')}).then(
                (e) => {
                    console.debug(':: token refresh success::');
                    const { data: {access_token, refresh_token} } = e;
                    Helper.cookieManager.set('login_access_token', access_token);
                    Helper.cookieManager.set('login_refresh_token', refresh_token);
                    resolve(retryOriginalRequest(originalRequest));
                },
                (error) => {
                    console.debug(':: token refresh fail::');
                    Helper.cookieManager.remove('login_access_token')
                    Helper.cookieManager.remove('login_refresh_token')
                    reject({state: false});
                }
            )
        });
    }

    // return Promise.reject(error);
    return Promise.reject({
        state: false,
        data: data
    });
});


/**
 * Cloudinary 프로필 이미지 업로드.
 * @param profileImage
 */
export const uploadProfileImage = async (profileImage: FormData ): Promise<_TYPES.APICloudinaryResponseType> => {
    try {
        const response = await axios.post( "https://api.cloudinary.com/v1_1/smcdnimg/image/upload", profileImage );
        // console.log('👉 uploadProfileImage data:', response.data);
        return {
            state: true,
            data: response.data,
            message: '정상 처리 했습니다.'
        };
    } catch (e) {
        return {
            state: false,
            error: e,
            message: '처리중 문제가 발생했습니다.'
        };
    }
}

/**
 * Cloudinary 포스트 이미지 업로드.
 * @param postimage
 */
export const uploadPostImage = async (postimage: FormData ): Promise<_TYPES.APICloudinaryResponseType> => {
    try {
        const response = await axios.post( "https://api.cloudinary.com/v1_1/smcdnimg/image/upload", postimage );
        // console.log('👉 uploadProfileImage data:', response.data);
        return {
            state: true,
            data: response.data,
            message: '정상 처리 했습니다.'
        };
    } catch (e) {
        return {
            state: false,
            error: e,
            message: '처리중 문제가 발생했습니다.'
        };
    }
}