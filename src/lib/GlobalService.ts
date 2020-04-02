import axios ,{
    AxiosInstance,
    AxiosPromise
} from 'axios';
import { getCookie } from "lib/Helper";

import { APIResponseType, APICloudinaryResponseType } from 'modules/types';


class GlobalService {

    axiosinstance: AxiosInstance;

    constructor() {

        const axiosinstance: AxiosInstance = axios.create({
            baseURL: process.env.REACT_APP_API_URL,
            timeout: 20000,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Request-Client-Type": "A02001",
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization" : "Bearer " + getCookie("login_access_token"),

            }
        });

        this.axiosinstance = axiosinstance;
    }

    promise = <T>(axiosPromise: AxiosPromise): Promise<T> => {
        return new Promise<T | any>((resolve, reject) => {
            axiosPromise
                .then(response => {
                    resolve({
                        state: true,
                        data: response.data
                    });
                })
                .catch(error => {
                    if (error.response) {
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
                            // message: "The request was made but no response was received"
                            message: "문제가 발생 했습니다. 잠시루 다시 시도해 주세요. (code:444)"
                        });
                    } else {
                        resolve({
                            status: 417,
                            // message: "Something happened in setting up the request that triggered an Error"
                            message: "문제가 발생 했습니다. 잠시루 다시 시도해 주세요. (code:417)"
                        });
                    }
                });
        });
    };

    error(message: string): never {
        throw new Error(message);
    };

    init = (method : string, url: string, params: object): Promise<APIResponseType> => {

        switch(method) {
            case 'get': {
                return this.promise<APIResponseType>(this.axiosinstance.get(url, params));
            }
            case 'post': {
                return this.promise<APIResponseType>(this.axiosinstance.post(url, params));
            }
            case 'put': {
                return this.promise<APIResponseType>(this.axiosinstance.put(url, params));
            }
            case 'delete': {
                return this.promise<APIResponseType>(this.axiosinstance.delete(url, params));
            }
            default:
                return this.error("Should never get here");
        }

    };
};

export default new GlobalService();

/**
 * Cloudinary 프로필 이미지 업로드.
 * @param profileImage
 */
export const uploadProfileImage = async (profileImage: FormData ): Promise<APICloudinaryResponseType> => {
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
export const uploadPostImage = async (postimage: FormData ): Promise<APICloudinaryResponseType> => {
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