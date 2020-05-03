import { LoginState } from './types';
import { ActionType } from 'modules/models';
import createReducer from 'modules/createReducer';
import * as commonTypes from 'modules/commonTypes';


const initialState: LoginState = {
    state: 'idle'
};

export const loginReducer = createReducer<commonTypes.loginSagaResponseType>(initialState, {
    [ActionType.LOGIN_REQUEST](state: commonTypes.loginSagaResponseType, action: commonTypes.Action<commonTypes.userLoginRequestType>) {
        return {
            ...state,
            state: 'loading'
        };
    },
    [ActionType.LOGIN_SUCCESS](state: commonTypes.loginSagaResponseType, action: commonTypes.Action<commonTypes.loginSagaResponseType>) {
        return {
            ...state,
            state: 'success',
            token_type: action.payload.token_type,
            expires_in: action.payload.expires_in,
            access_token: action.payload.access_token,
            refresh_token: action.payload.refresh_token,
            user_name: action.payload.user_name,
            profile_active: action.payload.profile_active,
            profile_image_url: action.payload.profile_image_url,
        }
    },
    [ActionType.LOGIN_ERROR](state: commonTypes.loginSagaResponseType, action: commonTypes.Action<commonTypes.loginSagaResponseType>) {
        return {
            ...state,
            state: 'failure',
            message: action.payload
        }
    },
    [ActionType.LOGIN_RESET](state: commonTypes.loginSagaResponseType) {
        console.debug(1111);
        return {
            state: 'idle'
        };
    }
});
export default loginReducer;