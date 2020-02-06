import { userLoginRequestType } from 'modules/types';
import { ActionType } from 'modules/models';

export const userLoginAction = (payload: userLoginRequestType) => {
    return {
        type:ActionType.LOGIN_REQUEST,
        payload
    };
}

export const userLoginResetAction = () => {
    return {
        type:ActionType.LOGIN_RESET
    };
}
