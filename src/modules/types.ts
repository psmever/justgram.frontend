import { ActionType } from "./models";
/**
 * 기본 널 타입.
 */
export type Nullable<T> = T | undefined | null;
export type SagaStatus = "yet" | "success" | "failure" | "reset";


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
    code_list?: string[],
    user_name?: string,
    name?: string,
    web_site?: string,
    bio?: string,
    phone_number?: string,
    gender?: string,
}

/**
 * 기본 적인 처리 상태 타입.
 */
export type ProcessStringStatus = "yet" | "processing" | "end";
export type ProcessBooleanState = true | false;

/**
 * API 기본 응답 타입 정의
 */
export type APIResponseType = {
    state?: Nullable<boolean>;
    data?: APIResponseSubDataInfoType;
    info?: Nullable<APIResponseSubInfoType>;
    message?: Nullable<string>;
};

/**
 * API 기본 응답 타입 정의
 */
export type APICloudinaryResponseType = {
    state?: Nullable<boolean>;
    data?: CloudinaryResponseSubDataInfoType;
    message?: Nullable<string>;
    error?: Error;
};

/**
 * 회원 가입 타입 정의
 */
export type registerRequestType = {
    username: string | undefined,
    email: string | undefined,
    password: string | undefined,
    confirm_password: string | undefined,
}

/**
 * 사용자 프로필 업데이트 완료 리턴 타입.
 */
export type updateProfileRequestType = {
    name: string | undefined,
    web_site: Nullable<string>,
    bio: Nullable<string>,
    phone_number: Nullable<string>,
    gender: Nullable<string>,
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
    profile_image_url?: string | null | undefined;
};

/**
 * 리덕스 사가 site data 타입.
 */
export type getSiteDataType = {
    code_list: string
}

/**
 * 리덕스 사가 사이트 기본 정보 타입.
 */
export type sitedataSagaResponseType = {
    state: SagaStatus;
    code_list: any;

};

/**
 * 기본 액션 타입.
 */
export type Action<T> = {
    type: ActionType;
    payload: T;
}

/**
 * Cloudinary 이미지 업로드 리턴 타입.
 */
export type CloudinaryResponseSubDataInfoType = {
    public_id: string;
    version: number;
    signature: string;
    width: number;
    height: number;
    format: string;
    resource_type: string;
    created_at: string;
    tags: []
    bytes: number;
    type: string;
    etag: string;
    placeholder: false
    url: string;
    secure_url: string;
    access_mode: string;
    original_filename: string;
}

/**
 * 사용자 프로필 정보 리퀘스트 타입.
 * 사용자 아이디.
 */
export type getProfileDataActionRequestType = {
    user_name: string;
}

/**
 * 사용자 프로필 정보 리스판스 타입.
 */
export type getUserProfileDataResponseType = {
    state: SagaStatus;
    user_uuid?: string;
    user_name?: string;
    email?: string;
    profile_image?: {
        url: string;
        secure_url: string;
    };
    count_info?: {
        posts: number;
        followers: number;
        following: number;
    };
    profile?: {
        name: string,
        web_site: string,
        bio: string,
        gender: string,
    };
    posts?: [];
};