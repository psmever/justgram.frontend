import { put, takeLatest, fork, call } from 'redux-saga/effects';
import { ActionType } from 'modules/models';
import { attemptGetFollowersListRequest, attemptGetFollowingListRequest, attempRequestUserUnFollow, attempRequestUserFollow} from 'lib/API';
import { UserFollowListRequestType, UserFollowRequestType } from 'modules/types';

function* requestGetFollowersListActionSaga({payload}: {payload: UserFollowListRequestType}) {
    const response = yield call(attemptGetFollowersListRequest, payload);
    if(response.state === true) {
        yield put({ type: ActionType.GET_USER_FOLLOWERS_LIST_SUCCESS, payload: response.data});
    } else {
        yield put({ type: ActionType.GET_USER_FOLLOWERS_LIST_ERROR, payload: response.data});
    }
}

function* requestGetFollowingListActionSaga({payload}: {payload: UserFollowListRequestType}) {
    const response = yield call(attemptGetFollowingListRequest, payload);
    if(response.state === true) {
        yield put({ type: ActionType.GET_USER_FOLLOWING_LIST_SUCCESS, payload: response.data});
    } else {
        yield put({ type: ActionType.GET_USER_FOLLOWING_LIST_ERROR, payload: response.data});
    }
}
function* requestUserFollowSaga({payload}: {payload: UserFollowRequestType}) {
    const response = yield call(attempRequestUserFollow, payload);
    if(response.state === true) {
        yield put({ type: ActionType.USER_FOLLOW_SUCCESS, payload: response.data});
    } else {
        yield put({ type: ActionType.USER_FOLLOW_ERROR, payload: response.data});
    }
}

function* requestUserUnFollowSaga({payload}: {payload: UserFollowRequestType}) {
    const response = yield call(attempRequestUserUnFollow, payload);
    if(response.state === true) {
        yield put({ type: ActionType.USER_UNFOLLOW_SUCCESS, payload: response.data});
    } else {
        yield put({ type: ActionType.USER_UNFOLLOW_ERROR, payload: response.data});
    }
}


function* onExploresWatcher() {
    yield takeLatest(ActionType.GET_USER_FOLLOWERS_LIST_REQUEST as any, requestGetFollowersListActionSaga);
    yield takeLatest(ActionType.GET_USER_FOLLOWING_LIST_REQUEST as any, requestGetFollowingListActionSaga);

    yield takeLatest(ActionType.USER_UNFOLLOW_REQUEST as any, requestUserUnFollowSaga);
    yield takeLatest(ActionType.USER_FOLLOW_REQUEST as any, requestUserFollowSaga);
}

export default [
    fork(onExploresWatcher),
];
