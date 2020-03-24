export enum ActionType {
    // login
    LOGIN_REQUEST = 'login/LOGIN_REQUEST',
    LOGIN_SUCCESS = 'login/LOGIN_SUCCESS',
    LOGIN_ERROR = 'login/LOGIN_ERROR',
    LOGIN_RESET = 'login/LOGIN_RESET',

    // Root Data
    GET_ROOTDATA_REQUEST = 'root/GET_ROOTDATA_REQUEST ',
    GET_ROOTDATA_SUCCESS = 'root/GET_ROOTDATA_SUCCESS',
    GET_ROOTDATA_ERROR = 'root/GET_ROOTDATA_ERROR',

    // 프로필 페이지 용 데이터
    GET_PROFILE_PAGE_DATA_REQUEST = 'profile/GET_PROFILE_PAGE_DATA_REQUEST',
    GET_PROFILE_PAGE_DATA_SUCCESS = 'profile/GET_PROFILE_PAGE_DATA_SUCCESS',
    GET_PROFILE_PAGE_DATA_ERROR = 'profile/GET_PROFILE_PAGE_DATA_ERROR',

    // post write 페이용 액션
    POST_TAG_SET = 'posts/POST_TAG_SET',
    POST_TAG_SUCCESS = 'posts/POST_TAG_SUCCESS',

    POST_SET_IMAGE_START = 'posts/POST_SET_IMAGE_START',
    POST_SET_IMAGE_FINISH = 'posts/POST_SET_IMAGE_FINISH',

    POST_SET_CONTENTS_REACTION = 'posts/POST_SET_CONTENTS_REACTION',
    POST_SET_CONTENTS_FINISH = 'posts/POST_SET_CONTENTS_FINISH',

    POST_DATA_REQUEST = 'posts/POST_DATA_REQUEST',
    POST_DATA_SUCCESS = 'posts/POST_DATA_SUCCESS',
    POST_DATA_ERROR = 'posts/POST_DATA_ERROR',

    GET_POST_LIST_REQUEST = 'posts/GET_POST_LIST_REQUEST',
    GET_POST_LIST_SUCCESS = 'posts/GET_POST_LIST_SUCCESS',
    GET_POST_LIST_ERROR = 'posts/GET_POST_LIST_ERROR',
}