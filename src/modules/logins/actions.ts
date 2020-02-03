import { userLoginInterface } from 'modules/interface';
import { ActionType } from 'modules/models';

export const userLoginAction = (payload: userLoginInterface) => {
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
