import { tryLoginAsync, LOGIN_START } from "./actions";
import { put, takeEvery } from "redux-saga/effects";

/**
 * 로그인 사가.
 * @param actions
 * @constructor
 */
function* LoginSaga(actions: ReturnType<typeof tryLoginAsync.request>) {
    try {
        if(actions.payload.state === true) {
            yield put(tryLoginAsync.success(actions.payload.data));
        } else {
            yield put(tryLoginAsync.failure(new Error('로그인에 실패 했습니다.')));
        }
    } catch (e) {
        yield put(tryLoginAsync.failure(e));
    }
}

export function* loginSaga() {
    yield takeEvery(LOGIN_START, LoginSaga);
}


