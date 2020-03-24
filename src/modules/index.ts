import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'
import { all } from 'redux-saga/effects';
import logins, { LoginState } from './logins';
import sitedatas, { SiteDataState } from './sitedatas';
import loginSaga from './logins/sagas';
import getSiteDataSaga from './sitedatas/sagas';
import profilepages, { GetProfileDataState } from './profilepage';
import getProfileDataSaga from './profilepage/sagas';

import posts, { PostsState } from './posts';
import postStateSaga from './posts/sagas';


export interface RootState {
    router: RouterState
    sitedata: SiteDataState
    login_state: LoginState
    profilepage_state : GetProfileDataState
    posts_state : PostsState
}

export const createRootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    sitedata: sitedatas,
    login_state: logins,
    profilepage_state : profilepages,
    posts_state : posts
});

export function* rootSaga() {
    yield all(
        [
            ...loginSaga,
            ...getSiteDataSaga,
            ...getProfileDataSaga,
            ...postStateSaga
        ]
    );
}