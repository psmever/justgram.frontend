import { createReducer } from 'typesafe-actions';
import { LoginState, LoginAction} from './types';
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR} from './actions';

const initialState: LoginState = {
    state: null
};

const loginReducer = createReducer<LoginState, LoginAction>(initialState, {
    [LOGIN_START]: state => ({
        ...state,
        state: null,
    }),
    [LOGIN_SUCCESS]: (state, action: any) => ({
        ...state,
        state: true,
        token_type: action.payload.token_type,
        expires_in: action.payload.expires_in,
        access_token: action.payload.access_token,
        refresh_token: action.payload.refresh_token
    }),
    [LOGIN_ERROR]: (state, action: any) => ({
        ...state,
        state: false,
        message: action.payload.message
    })
});

export default loginReducer;

