import GlobalService from 'lib/GlobalService';
import {
    APIResponseType,
    registerRequestType,
} from 'modules/types';

/**
 * 서버 체크
 */
export function checkServer(): Promise<APIResponseType> {
    return GlobalService.init('get', '/api/justgram/v1/system/server', {});
};

/**
 * 공지 사항 체크
 */
export function checkNotice(): Promise<APIResponseType> {
    return GlobalService.init('get', '/api/justgram/v1/system/notice', {});
};

/**
 * 사이트 기본 정보.
 * @param email
 * @param password
 */
export function getSiteData(): Promise<APIResponseType> {
    return GlobalService.init('get', '/api/justgram/v1/system/sitedata', {});
};

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