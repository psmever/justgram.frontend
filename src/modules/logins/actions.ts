import * as commonTypes from 'modules/commonTypes';
import { ActionType } from 'modules/models';

/**
 * 로그인 사가 액션.
 * @param payload
 */
export const userLoginAction = (payload: commonTypes.userLoginRequestType) => {
    return {
        type:ActionType.LOGIN_REQUEST,
        payload
    };
}

/**
 * 로그인 리덕스 정보 리셋?
 */
export const userLoginResetAction = () => {
    return {
        type:ActionType.LOGIN_RESET
    };
}

/**
 * 로컬 로근 정보를 스토어에 연결.
 * @param payload
 */
export const loginLocalinfoToStore = (payload: commonTypes.loginSagaResponseType) => {
    return {
        type:ActionType.LOGIN_SUCCESS,
        payload
    }
}

/**
 * 로그인 정보 초기화(사용못함 무한루프돔.)
 */
export const initialLoginInfo = () => {
    return {
        type:ActionType.LOGIN_RESET
    }
}