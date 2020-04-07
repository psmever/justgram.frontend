import * as GlobalService from 'lib/GlobalService';
import * as _TYPES from 'modules/commonTypes';

/**
 * 서버 체크
 */
export function checkServer(): Promise<_TYPES.APIResponseType> {
    return GlobalService.start({
        authType: false,
        method: 'get',
        endpoint: '/api/justgram/v1/system/server',
        payload: {}
    });
};

/**
 * 공지 사항 체크
 */
export function checkNotice(): Promise<_TYPES.APIResponseType> {
    return GlobalService.start({
        authType: false,
        method: 'get',
        endpoint: '/api/justgram/v1/system/notice',
        payload: {}
    });
};

/**
 * 사이트 기본 정보.
 * @param email
 * @param password
 */
export function getSiteData(): Promise<_TYPES.APIResponseType> {
    return GlobalService.start({
        authType: false,
        method: 'get',
        endpoint: '/api/justgram/v1/system/sitedata',
        payload: {}
    });
};

/**
 * 로그인 시도
 * @param email
 * @param password
 */
export function tryLogin(email: string, password: string): Promise<_TYPES.APIResponseType> {
    return GlobalService.start({
        authType: false,
        method: 'post',
        endpoint: '/api/justgram/v1/login',
        payload: {email: email, password: password}
    });
};

/**
 *
 * @param payload 회원 가입.
 */
export function tryRegister<T>(payload: _TYPES.registerRequestType): Promise<_TYPES.APIResponseType> {
    return GlobalService.start({
        authType: false,
        method: 'post',
        endpoint: '/api/justgram/v1/register',
        payload: {
            username: payload.username,
            email: payload.email,
            password: payload.password,
            confirm_password: payload.confirm_password
        }
    });
}

/**
 * 사용자 프로필 가지고 오기.
 * @param payload
 */
export function getUserProfile(): Promise<_TYPES.APIResponseType> {
    return GlobalService.start({
        authType: true,
        method: 'get',
        endpoint: '/api/justgram/v1/my/profile',
        payload: {}
    });
}

/**
 * 사용자 프로필 업데이트
 * @param payload
 */
export function updateProfile<T>(payload: _TYPES.updateProfileRequestType): Promise<_TYPES.APIResponseType> {
    return GlobalService.start({
        authType: true,
        method: 'put',
        endpoint: '/api/justgram/v1/my/profile',
        payload: {
            name: payload.name,
            web_site: payload.web_site,
            bio: payload.bio,
            phone_number: payload.phone_number,
            gender: payload.gender
        }
    });
}

/**
 * 프로필 이미지 업로드< Cloudinary >.
 * @param profileImage
 */
export function tryProfileImageUpload(profileImage : string | Blob): Promise<_TYPES.APICloudinaryResponseType> {
    const imageFormData = new FormData();
    imageFormData.append('api_key', "679515818162781");
    imageFormData.append('upload_preset', "justgram_profile");
    imageFormData.append('file', profileImage);

    return GlobalService.uploadProfileImage(imageFormData);
}

/**
 * post 이미지 업로드 API.
 * @param postimage
 */
export function tryPostImageUpload(postimage : string | Blob): Promise<_TYPES.APICloudinaryResponseType> {
    const imageFormData = new FormData();
    imageFormData.append('api_key', "679515818162781");
    imageFormData.append('upload_preset', "justgram_image");
    imageFormData.append('file', postimage);

    return GlobalService.uploadProfileImage(imageFormData);
}

/**
 * Post Data Request
 * @param payload
 */
export function attemptPostDataRequest(payload: _TYPES.PostRequestType): Promise<_TYPES.APIResponseType> {
    return GlobalService.start({
        authType: true,
        method: 'post',
        endpoint: `/api/justgram/v1/post`,
        payload: {
            upload_image: payload.upload_image,
            tags: payload.tags,
            contents: payload.contents
        }
    });
}

/**
 * 포스트 리스트 가지고 오기.
 */
export function attemptGetPostListRequest(): Promise<_TYPES.APIResponseType> {
    return GlobalService.start({
        authType: false,
        method: 'get',
        endpoint: `/api/justgram/v1/post`,
        payload: {}
    });
}

/**
 * 사용자 업로드 프로필 이미지 API 전달.
 * @param payload
 */
export function putUserProfileImage(payload : _TYPES.CloudinaryResponseSubDataInfoType): Promise<_TYPES.APIResponseType> {
    return GlobalService.start({
        authType: true,
        method: 'put',
        endpoint: '/api/justgram/v1/my/profile/image',
        payload: payload
    });
}

/**
 * 사용자 프로필 가지고 오기.
 * @param payload user_name
 */
export function getUserProfilePageData(payload: _TYPES.getProfileDataActionRequestType) {
    return GlobalService.start({
        authType: true,
        method: 'get',
        endpoint: `/api/justgram/v1/user/${payload.user_name}/profile`,
        payload: {}
    });
}

/**
 * 포트스 댓글 등록.
 * @param payload
 */
export function attemptPostCommentRequest(payload: _TYPES.PostsCommentRequestType): Promise<_TYPES.APIResponseType> {
    return GlobalService.start({
        authType: true,
        method: 'post',
        endpoint: `/api/justgram/v1/post/comment`,
        payload: payload
    });
}


/**
 * Follow
 * @param payload
 */
export function attemptGetFollowersListRequest(payload: _TYPES.UserFollowListRequestType): Promise<_TYPES.APIResponseType> {
    return GlobalService.start({
        authType: true,
        method: 'get',
        endpoint: `/api/justgram/v1/user/${payload.user_name}/followers`,
        payload: {}
    });
}

export function attemptGetFollowingListRequest(payload: _TYPES.UserFollowListRequestType): Promise<_TYPES.APIResponseType> {
    return GlobalService.start({
        authType: true,
        method: 'get',
        endpoint: `/api/justgram/v1/user/${payload.user_name}/following`,
        payload: {}
    });
}

export function attempRequestUserFollow(payload: _TYPES.UserFollowRequestType): Promise<_TYPES.APIResponseType> {
    return GlobalService.start({
        authType: true,
        method: 'post',
        endpoint: '/api/justgram/v1/user/follow',
        payload: payload
    });
}

export function attempRequestUserUnFollow(payload: _TYPES.UserFollowRequestType): Promise<_TYPES.APIResponseType> {
    return GlobalService.start({
        authType: true,
        method: 'delete',
        endpoint: '/api/justgram/v1/user/follow',
        payload: {data: payload}
    });
}

export function attempRequestPostAddHeart(payload: _TYPES.PostHeartRequestType): Promise<_TYPES.APIResponseType>{
    return GlobalService.start({
        authType: true,
        method: 'post',
        endpoint: `/api/justgram/v1/post/heart`,
        payload: payload
    });
}

export function attempRequestPostDeleteHeart(payload: _TYPES.PostHeartRequestType): Promise<_TYPES.APIResponseType> {
    return GlobalService.start({
        authType: true,
        method: 'delete',
        endpoint: `/api/justgram/v1/post/heart`,
        payload: {data: payload}
    });
}