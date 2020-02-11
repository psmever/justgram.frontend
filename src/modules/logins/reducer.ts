import { LoginState } from './types';
import { ActionType } from 'modules/models';
import createReducer from 'modules/createReducer';
import { Action, loginSagaResponseType, userLoginRequestType } from 'modules/types';

const initialState: LoginState = {
    state: 'yet'
};

export const loginReducer = createReducer<loginSagaResponseType>(initialState, {
    [ActionType.LOGIN_REQUEST](state: loginSagaResponseType, action: Action<userLoginRequestType>) {
        return {
            ...state,
            state: 'yet'
        };
    },
    [ActionType.LOGIN_SUCCESS](state: loginSagaResponseType, action: Action<loginSagaResponseType>) {
        return {
            ...state,
            state: 'success',
            token_type: action.payload.token_type,
            expires_in: action.payload.expires_in,
            access_token: action.payload.access_token,
            refresh_token: action.payload.refresh_token,
            user_name: action.payload.user_name
        }
    },
    [ActionType.LOGIN_ERROR](state: loginSagaResponseType, action: Action<loginSagaResponseType>) {
        return {
            ...state,
            state: 'failure',
            message: action.payload
        }
    },
    [ActionType.LOGIN_RESET](state: loginSagaResponseType) {
        return {
            ...state,
            state: 'yet'
        };
    }
});
export default loginReducer;