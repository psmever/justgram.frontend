import { LoginState } from './types';
import { ActionType } from 'modules/models';
import createReducer from 'modules/createReducer';
import { Action, loginSagaInterface, userLoginInterface } from 'modules/interface';

const initialState: LoginState = {
    state: 'yet'
};

export const loginReducer = createReducer<loginSagaInterface>(initialState, {
    [ActionType.LOGIN_REQUEST](state: loginSagaInterface, action: Action<userLoginInterface>) {
        return {
            ...state,
            state: 'yet'
        };
    },
    [ActionType.LOGIN_SUCCESS](state: loginSagaInterface, action: Action<loginSagaInterface>) {
        return {
            ...state,
            state: 'success',
            token_type: action.payload.token_type,
            expires_in: action.payload.expires_in,
            access_token: action.payload.access_token,
            refresh_token: action.payload.refresh_token
        }
    },
    [ActionType.LOGIN_ERROR](state: loginSagaInterface, action: Action<loginSagaInterface>) {
        return {
            ...state,
            state: 'failure',
            message: action.payload
        }
    },
    [ActionType.LOGIN_RESET](state: loginSagaInterface) {
        return initialState;
    }
});
export default loginReducer;