import axios ,{
    AxiosInstance,
    AxiosPromise
} from 'axios';

import * as commonTypes from 'modules/commonTypes';
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

const promise = <T>(axiosPromise: AxiosPromise): Promise<T> => {
    return new Promise<T | any>((resolve, reject) => {
        axiosPromise.then(response => {
            resolve({
                state: true,
                data: response.data
            });
        })
        .catch(error => {
            if (error.response) {

                if(error.response.status === 401 || error.response.status === 403) {
                    Helper.removeLoginInfo();
                    GlobalAlert.default({
                        text: error.response.data.error_message,
                    });
                    history.push(process.env.PUBLIC_URL + '/login');
                }

                const errorMessage = error.response.data.error_message;
                if(typeof errorMessage === 'object') {
                    // console.debug(errorMessage.toString());
                    // 어떻게 할것 인지?
                } else {
                    resolve({
                        state: false,
                        message: (error.response.data.error_message) ? error.response.data.error_message : "처리중 문제가 발생했습니다."
                    });
                }
            } else if (error.request) {
                resolve({
                    status: 444,
                    message: "서버와의 통신중 문제가 발생했습니다."
                });
            } else {
                resolve({
                    status: 417,
                    message: "알수 없는 에러 입니다."
                });
            }
        });
    });
};

export const refresh_token = async ()  => {

    const defaultAxiosinstance: AxiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        timeout: 20000,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Request-Client-Type": "A02001",
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization" : "Bearer " + Helper.getAccessToken(),
        }
    });

    await defaultAxiosinstance.post('/api/justgram/v1/token/refresh', {
        refresh_token: await Helper.getRefreshToken()
    }).then(async response => {
        await Helper.setLoginInfoRefresh(response.data);
        return true;
    }).catch(error => {
        console.debug(error);
        return false;
    });

    return true;
}

const error = (message: string): never => {
    throw new Error(message);
};

export const start = async ( {authType, method, endpoint, payload}: apiRequest) => {
    if(authType) {
        await refresh_token();
    }
    const defaultAxiosinstance: AxiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        timeout: 20000,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Request-Client-Type": "A02001",
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization" : "Bearer " + Helper.getAccessToken(),
            // "Authorization" : "Bearer " + Helper.getAccessToken(),
        }
    });

    switch(method) {
        case 'get': {
            return promise<commonTypes.APIResponseType>(defaultAxiosinstance.get(endpoint, payload));
        }
        case 'post': {
            return promise<commonTypes.APIResponseType>(defaultAxiosinstance.post(endpoint, payload));
        }
        case 'put': {
            return promise<commonTypes.APIResponseType>(defaultAxiosinstance.put(endpoint, payload));
        }
        case 'delete': {
            return promise<commonTypes.APIResponseType>(defaultAxiosinstance.delete(endpoint, payload));
        }
        default:
            return error("Should never get here");
    }
}



/**
 * Cloudinary 프로필 이미지 업로드.
 * @param profileImage
 */
export const uploadProfileImage = async (profileImage: FormData ): Promise<commonTypes.APICloudinaryResponseType> => {
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
export const uploadPostImage = async (postimage: FormData ): Promise<commonTypes.APICloudinaryResponseType> => {
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