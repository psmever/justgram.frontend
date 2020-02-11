import { ActionType } from "./models";
/**
 * 기본 널 타입.
 */
type Nullable<T> = T | undefined | null;
type SagaStatus = "yet" | "success" | "failure" | "reset";


type APIResponseSubInfoType = {
    uuid?: string,
}

/**
 * 회원 가입 응답 서브 타입 정의
 */
export type APIResponseSubDataInfoType = {
    message?: Nullable<string>,
    info?: Nullable<object>,
    notice_exits?: Nullable<boolean>;
    notice?: Nullable<string>;
    code_list?: Nullable<object>,
}

/**
 * 기본 적인 처리 상태 타입.
 */
export type ProcessStringStatus = "yet" | "processing" | "end";
export type ProcessBooleanState = true | false;

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

/**
 * 사용자 로그인 시도 타입.
 */
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
    profile_active?: Nullable<string>;
};

/**
 * 리덕스 사가 site data 타입.
 */
export type getSiteDataType = {
    code_list: Nullable<object>
}
/**
 * 리덕스 사가 사이트 기본 정보 타입.
 */
export type sitedataSagaResponseType = {
    state: SagaStatus;
    code_list?: string[];

};

/**
 * 기본 액션 타입.
 */
export type Action<T> = {
    type: ActionType;
    payload: T;
}