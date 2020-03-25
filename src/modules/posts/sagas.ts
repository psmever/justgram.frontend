import { put, takeLatest, fork, call } from "redux-saga/effects";
import { PostsStateType, CloudinaryResponseSubDataInfoType, PostRequestType, PostsCommentRequestType } from 'modules/types';
import { ActionType } from 'modules/models';
import { attemptPostDataRequest, attemptGetPostListRequest, attemptPostCommentRequest } from 'lib/API';

function* setPostsTagSaga({ payload }: { payload: PostsStateType}) {
    yield put({ type: ActionType.POST_TAG_SUCCESS, payload: payload });
}

function* setPostsImageSaga({ payload }: {payload: CloudinaryResponseSubDataInfoType}) {
    yield put({ type: ActionType.POST_SET_IMAGE_FINISH, payload: payload});
}

function* setPostsContentsSaga( {payload}: {payload: string}) {
    yield put({type: ActionType.POST_SET_CONTENTS_FINISH, payload: payload});
}

function* attemptPostRequestSaga({ payload }: { payload: PostRequestType }) {
    const response = yield call(attemptPostDataRequest, payload);

    if(response.state === true) {
        yield put({ type: ActionType.POST_DATA_SUCCESS, payload: response.payload });
    } else {
        yield put({ type: ActionType.POST_DATA_ERROR, payload: response.payload });
    }
}

function* attemptGetPostListRequestSaga() {
    const response = yield call(attemptGetPostListRequest)

    if(response.state === true) {
        yield put({ type: ActionType.GET_POST_LIST_SUCCESS, payload: response.data });
    } else {
        yield put({ type: ActionType.GET_POST_LIST_ERROR, payload: response.data });
    }
}

function* attemptPostsCommentRequestSaga( {payload}: {payload: PostsCommentRequestType}) {
    const response = yield call(attemptPostCommentRequest, payload);

    if(response.state === true) {
        yield put({ type: ActionType.POST_COMMENT_DATA_SUCCESS, payload: response.data });
    } else {
        yield put({ type: ActionType.POST_COMMENT_DATA_ERROR, payload: response.data });
    }

}

function* onPostsWatcher() {
    yield takeLatest(ActionType.POST_TAG_SET as any, setPostsTagSaga);
    yield takeLatest(ActionType.POST_SET_IMAGE_START as any, setPostsImageSaga);
    yield takeLatest(ActionType.POST_SET_CONTENTS_REACTION as any, setPostsContentsSaga);
    yield takeLatest(ActionType.POST_DATA_REQUEST as any, attemptPostRequestSaga);
    yield takeLatest(ActionType.GET_POST_LIST_REQUEST as any, attemptGetPostListRequestSaga);
    yield takeLatest(ActionType.POST_COMMENT_DATA_REQUEST as any, attemptPostsCommentRequestSaga);
}

export default [
    fork(onPostsWatcher),
];