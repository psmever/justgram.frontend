import GlobalService from 'lib/GlobalService';
import {
    APIResponseType,
    registerRequestType,
 } from 'modules/types';


/**
 * 로그인 시도
 * @param email
 * @param password
 */
export function tryLogin(email: string, password: string): Promise<APIResponseType> {
    return GlobalService.init('post', '/api/justgram/v1/login', {email: email, password: password});
};

/**
 *
 * @param payload 회원 가입.
 */
export function tryRegister<T>(payload: registerRequestType): Promise<APIResponseType> {
    return GlobalService.init('post', '/api/justgram/v1/register', {
        username: payload.username,
        email: payload.email,
        password: payload.password,
        confirm_password: payload.confirm_password
    });
}