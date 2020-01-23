import { defaultAxios } from "./RootAxios";

export interface apiRequestInterface {
    token_type: string;
    expires_in: bigint;
    access_token: string;
    refresh_token: string;

    email: string;
    password: string;
    state: boolean;
    message: string;
    data: object;
}

export const doLogin = async (payload: object) => {
    return await defaultAxios.post<apiRequestInterface>('/api/justgram/v1/login', payload );
};
