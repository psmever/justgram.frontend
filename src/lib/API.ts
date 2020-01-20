import { defaultAxios } from "./RootAxios";

// 로그인 시도.
// export const tryLogin: any = async (email: string, password: string) => await defaultAxios.post('/api/justgram/v1/login', {email:email, password:password});


export interface apiRequestInterface {
    token_type: string;
    expires_in: bigint;
    access_token: string;
    refresh_token: string;

    email: string;
    password: string;
}



export async function doLogin(email: string , password: string) {
    console.debug(`${email}, ${password}`);
    const response = await defaultAxios.post<apiRequestInterface>('/api/justgram/v1/login', { email: email, password: password } );
    return response.data;
};


