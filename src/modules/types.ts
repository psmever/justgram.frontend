import { ActionType } from './models';
/**
 * 기본 널 타입.
 */
type Nullable<T> = T | undefined | null;
type SagaStatus = 'yet' | 'success' | 'failure' | 'reset';

type APIResponseSubInfoType = {
    uuid?: string
}

/**
 * 회원 가입 응답 서브 타입 정의
 */
type APIResponseSubDataInfoType = {
    message?: Nullable<string>,
    info?: Nullable<object>
}

/**
 * API 응답 타입 정의
 */
export type APIResponseType = {
    state?: Nullable<boolean>;
    data?: Nullable<APIResponseSubDataInfoType>;
    info?: Nullable<APIResponseSubInfoType>;
    message?: Nullable<string>;
};

/**
 * 회원 가입 타입 정의
 */
export type registerRequestType = {
    username: string,
    email: string,
    password: string,
    confirm_password: string
}

export type userLoginRequestType = {
    email: string,
    password: string
}
/**
 * 리덕스 로그인 state
 */
export type loginSagaResponseType = {
    state: SagaStatus;
    token_type?: Nullable<string>;
    expires_in?: Nullable<number>;
    access_token?: Nullable<string>;
    refresh_token?: Nullable<string>;
    message?: Nullable<string>;
    user_name?: Nullable<string>;
};


export type sitedataSagaResponseType = {
    state: SagaStatus;
    code_list?: string[];

};


export type Action<T> = {
    type: ActionType;
    payload: T;
}