import GlobalService from 'lib/GlobalService';
import {
    APIResponse,
    registerInsterface,
 } from 'modules/interface';


/**
 * 로그인 시도
 * @param email
 * @param password
 */
export function tryLogin(email: string, password: string): Promise<APIResponse> {
    return GlobalService.init('post', '/api/justgram/v1/login', {email: email, password: password});
};

/**
 *
 * @param payload 회원 가입.
 */
export function tryRegister<T>(payload: registerInsterface): Promise<APIResponse> {
    return GlobalService.init('post', '/api/justgram/v1/register', {
        name: payload.name,
        email: payload.email,
        password: payload.password,
        confirm_password: payload.confirm_password
    });
}