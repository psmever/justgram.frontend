import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'
import { all } from 'redux-saga/effects';
import logins, { loginSaga, LoginState } from './logins';

export interface RootState {
    router: RouterState
    login_state: LoginState
}

export const createRootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    login_state: logins,
});

export function* rootSaga() {
    yield all(
        [
            loginSaga()
        ]
    );
}
