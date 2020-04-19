import { put, takeLatest, fork, call } from "redux-saga/effects";
import * as _TYPES from 'modules/commonTypes';
import { ActionType } from 'modules/models';
import * as _API_ from 'lib/API';

function* setPostsTagSaga({ payload }: { payload: _TYPES.PostsStateType}) {
    yield put({ type: ActionType.POST_TAG_SUCCESS, payload: payload });
}

function* setPostsImageSaga({ payload }: {payload: _TYPES.CloudinaryResponseSubDataInfoType}) {
    yield put({ type: ActionType.POST_SET_IMAGE_FINISH, payload: payload});
}

function* setPostsContentsSaga( {payload}: {payload: string}) {
    yield put({type: ActionType.POST_SET_CONTENTS_FINISH, payload: payload});
}

function* attemptPostRequestSaga({ payload }: { payload: _TYPES.PostRequestType }) {
    const response = yield call(_API_.attemptPostDataRequest, payload);
    if(response.state === true) {
        yield put({ type: ActionType.POST_DATA_SUCCESS, payload: response.payload });
    } else {
        yield put({ type: ActionType.POST_DATA_ERROR, payload: response.payload });
    }
}

function* attemptGetPostListRequestSaga() {
    const response = yield call(_API_.attemptGetPostListRequest)
    if(response.state === true) {
        yield put({ type: ActionType.GET_POST_LIST_SUCCESS, payload: response.data });
    } else {
        yield put({ type: ActionType.GET_POST_LIST_ERROR, payload: response.data });
    }
}

function* attemptPostsCommentRequestSaga( {payload}: {payload: _TYPES.PostsCommentRequestType}) {
    const response = yield call(_API_.attemptPostCommentRequest, payload);
    if(response.state === true) {
        yield put({ type: ActionType.POST_COMMENT_DATA_SUCCESS, payload: response.data });
    } else {
        yield put({ type: ActionType.POST_COMMENT_DATA_ERROR, payload: response.data });
    }
}

function* attemptPostAddHeartRequestSaga( {payload}: {payload: _TYPES.PostHeartRequestType}) {
    const response = yield call(_API_.attempRequestPostAddHeart, payload);
    if(response.state === true) {
        yield put({ type: ActionType.POST_HEART_ADD_SUCCESS, payload: response.data});
    } else {
        yield put({ type: ActionType.POST_HEART_ADD_ERROR, payload: response.data});
    }
}

function* attemptPostDeleteHeartRequestSaga( {payload}: {payload: _TYPES.PostHeartRequestType}) {
    const response = yield call(_API_.attempRequestPostDeleteHeart, payload);
    if(response.state === true) {
        yield put({ type: ActionType.POST_HEART_DELETE_SUCCESS, payload: response.data});
    } else {
        yield put({ type: ActionType.POST_HEART_DELETE_ERROR, payload: response.data});
    }
}

function* onPostsWatcher() {
    yield takeLatest(ActionType.POST_TAG_SET as any, setPostsTagSaga);
    yield takeLatest(ActionType.POST_SET_IMAGE_START as any, setPostsImageSaga);
    yield takeLatest(ActionType.POST_SET_CONTENTS_REACTION as any, setPostsContentsSaga);
    yield takeLatest(ActionType.POST_DATA_REQUEST as any, attemptPostRequestSaga);
    yield takeLatest(ActionType.GET_POST_LIST_REQUEST as any, attemptGetPostListRequestSaga);
    yield takeLatest(ActionType.POST_COMMENT_DATA_REQUEST as any, attemptPostsCommentRequestSaga);
    yield takeLatest(ActionType.POST_HEART_ADD_REQUEST as any, attemptPostAddHeartRequestSaga);
    yield takeLatest(ActionType.POST_HEART_DELETE_REQUEST as any, attemptPostDeleteHeartRequestSaga);
}

export default [
    fork(onPostsWatcher),
];