import { createReducer } from 'typesafe-actions';
import { LoginState, LoginAction} from './types';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR} from './actions';


const initialState: LoginState = {
    login: {
        request: false,
        data: null,
        error: null,
    }
};

const loginReducer = createReducer<LoginState, LoginAction>(initialState, {
    [LOGIN_REQUEST]: state => ({
        ...state,
        login: {
            request: true,
            data: null,
            error: null,

        }
    }),
    [LOGIN_SUCCESS]: (state, action) => ({
        ...state,
        login: {
            request: false,
            data: action.payload,
            error: null,
        }
    }),
    [LOGIN_ERROR]: (state, action) => ({
        ...state,
        login: {
            request: false,
            data: null,
            error: action.payload

        }
    })
});


export default loginReducer;

