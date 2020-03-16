import GlobalService, {  uploadProfileImage }  from 'lib/GlobalService';
import {
    APIResponseType,
    registerRequestType,
    updateProfileRequestType,
    APICloudinaryResponseType,
    CloudinaryResponseSubDataInfoType,
    getProfileDataActionRequestType,
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

/**
 * 사용자 프로필 가지고 오기.
 * @param payload
 */
export function getUserProfile(): Promise<APIResponseType> {
    return GlobalService.init('get', '/api/justgram/v1/my/profile', {});
}

/**
 * 사용자 프로필 업데이트
 * @param payload
 */
export function updateProfile<T>(payload: updateProfileRequestType): Promise<APIResponseType> {
    return GlobalService.init('put', '/api/justgram/v1/my/profile', {
        name: payload.name,
        web_site: payload.web_site,
        bio: payload.bio,
        phone_number: payload.phone_number,
        gender: payload.gender
    });
}
/**
 * 프로필 이미지 업로드< Cloudinary >.
 * @param profileImage
 */
export function tryProfileImageUpload(profileImage : string | Blob): Promise<APICloudinaryResponseType> {
    const imageFormData = new FormData();
    imageFormData.append('api_key', "679515818162781");
    imageFormData.append('upload_preset', "justgram_image");
    imageFormData.append('file', profileImage);

    return uploadProfileImage(imageFormData);
}

/**
 * 사용자 업로드 프로필 이미지 API 전달.
 * @param payload
 */
export function putUserProfileImage(payload : CloudinaryResponseSubDataInfoType): Promise<APIResponseType> {
    return GlobalService.init('put', '/api/justgram/v1/my/profile/image', payload);
}

/**
 * 사용자 프로필 가지고 오기.
 * @param payload user_name
 */
export function getUserProfilePageData(payload: getProfileDataActionRequestType) {
    return GlobalService.init('get', `/api/justgram/v1/user/${payload.user_name}/profile`, {});

}