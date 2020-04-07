import { ActionType } from "./models";
/**
 * 기본 널 타입.
 */
export type Nullable<T> = T | undefined | null;
export type SagaStatus = "idle" | "loading" | "success" | "failure" | "reset";


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
    user_profile_name?: string,
    name?: string,
    web_site?: string,
    bio?: string,
    phone_number?: string,
    gender?: string,
    user_id?: number,
    user_uuid?: number,
    email?: string,
    following_list?: FollowingListType[],
    followers_list?: FollowingListType[],
}

export type followingAPIResponseType = {
    user_id: number,
    user_uuid: string,
    user_name: string,
    email: string,
    following_list: FollowingListType[]
}
export type followersAPIResponseType = {
    user_id: number,
    user_uuid: string,
    user_name: string,
    email: string,
    followers_list: FollowersListType[]
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
    post_id?: number,
    user_uuid?: string,
    contents?: string,
    user_info?: {
        user_id?: number,
        user_name?: string,
        user_email?: string,
    },
    tags?: string[],
    image?: {
        image_id?: number,
        cloudinary?: {
            cloudinary_id?: number,
            url?: string,
            secure_url?: string,
        }
    },
    post_datetime?: {
        create_at?: string,
        create_at_string?: string,
        create_time_string?: string,
        update_at?: string,
        update_at_string?: string,
        update_time_string?: string,
    }
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
 * 사용자 프로필 정보 Request 타입.
 * 사용자 아이디.
 */
export type getProfileDataActionRequestType = {
    user_name: string;
}

/**
 * 사용자 프로필 정보 Response 타입.
 */
export type getUserProfileDataResponsePostType = {
    post_id: number,
    image: {
        id: number,
        url: string,
        secure_url: string,
    },
    count: {
        comment_count: number,
        heart_count: number
    }
}
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
    posts?: getUserProfileDataResponsePostType[]
};

/**
 * post 페이지 스테이트.
 */
export type PostsStateType = {
    post_write: {
        state: SagaStatus,
        tags: string[],
        postimage: any,
        contents: string,
    },
    post_list: {
        state: SagaStatus,
        list: []
    },
    post_comment_request: {
        state: SagaStatus,
    },
    post_add_heart_request: {
        state: SagaStatus,
    },
    post_delete_heart_request: {
        state: SagaStatus,
    }
}

export type UserFollowListRequestType = {
    user_name : string
}

export type UserFollowRequestType = {
    target_user_id : number
}

export type FollowersListType = {
    user_id: number,
    created_at: string,
    user_name: string,
    user_profile_name: string,
    user_uuid: string,
    profile_image: string,
    mefollowing: boolean
}

export type FollowingListType = {
    user_id: number,
    created_at: string,
    user_name: string,
    user_uuid: string,
    user_profile_name: string,
    profile_image: string,
    targetfollowing: boolean
}

export type FollowsStateType = {
    followers: {
        state: SagaStatus,
        list: FollowersListType[],
    },
    following: {
        state: SagaStatus,
        list: FollowingListType[],
    },
    follow: {
        state: SagaStatus,
    }
    unfollow: {
        state: SagaStatus,
    }
}

/**
 * post 리퀘스트 타입
 */
export type PostRequestType = {
    upload_image: string;
    tags: string,
    contents: string
}

export type PostsCommentRequestType = {
    post_id: number,
    contents: string
}

export type PostListResponseType = {
    post_id: number,
    user_uuid: string,
    contents: string,
    myheart: boolean,
    hearts_count: number,
    user_info: {
        user_id: number,
        user_name: string,
        user_email: string,
        user_profile_image: string,
    },
    tags: {
        list: string[],
        string: string,
    },
    image: {
        image_id: number,
        cloudinary: {
            cloudinary_id: number,
            url: string,
            secure_url: string,
        }
    },
    post_datetime: {
        create_at: string,
        create_at_string: string,
        create_time_string: string,
        update_at: string,
        update_at_string: string,
        update_time_string: string,
    },
    comments: PostListCommentType[]
}

export type PostListCommentType = {
    comment_id: number,
    user_uuid: string,
    contents: string,
    created_at: string,
    user: {
        user_name: string
    }
}

export type PostHeartRequestType = {
    post_id: number
}
