// 기본 스토어 백업.

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { History } from 'history'

import logins from './logins';
import { all } from 'redux-saga/effects';
import { loginSaga } from './logins';


export const createRootReducer = (history: History) =>
    combineReducers({
        logins: logins,
        router: connectRouter(history)
    })

const rootReducer = combineReducers({
    logins
});

export type RootState = ReturnType<typeof rootReducer>;


export function* rootSaga() {
    yield all(
        [loginSaga()]
    );
}

export default rootReducer;