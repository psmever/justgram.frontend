import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'
import { all } from 'redux-saga/effects';
import logins, { LoginState } from './logins';
import sitedatas, { SiteDataState } from './sitedatas';
import loginSaga from './logins/sagas';
import getSiteDataSaga from './sitedatas/sagas';

export interface RootState {
    router: RouterState
    sitedata: SiteDataState
    login_state: LoginState
}

export const createRootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    sitedata: sitedatas,
    login_state: logins,
});

export function* rootSaga() {
    yield all(
        [
            ...loginSaga,
            ...getSiteDataSaga
        ]
    );
}
