import { defaultAxios } from "./RootAxios";

// 로그인 시도.
export const tryLogin: any = async (email: string, password: string) => await defaultAxios.post('/api/justgram/v1/login', {email:email, password:password});

