
/**
 * API 결과 타입 정의
 */
export interface APIResponse {
    state?: boolean | string | null;
    data?: any | null;
    message?: string | null;
};

/**
 * 리덕스 로그인 state
 */
export interface loginSagaInterface {
    state: boolean | null;
    token_type?: string | null | any;
    expires_in?: number | null | any;
    access_token?: string | null| any;
    refresh_token?: string | null| any;
    message?: string| null
};