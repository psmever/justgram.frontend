import GlobalService from 'lib/GlobalService';
import { APIResponse } from 'modules/interface';


/**
 * 로그인 시도
 * @param email
 * @param password
 */
export function tryLogin(email: string, password: string): Promise<APIResponse> {
    return GlobalService.init('post', '/api/justgram/v1/login', {email: email, password: password});
};