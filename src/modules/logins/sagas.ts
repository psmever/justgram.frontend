// import { tryLoginAsync, LOGIN_START } from "./actions";
import { put, takeLatest, fork, call } from "redux-saga/effects";
// import loginActions, { LOGIN_SUCCESS }from './actions';
import { userLoginRequestType } from 'modules/types';
import { tryLogin } from 'lib/API';
import { ActionType } from 'modules/models';
/**
 * 로그인 사가.
 * @param actions
 * @constructor
 */
function* loginSaga({ payload }: {payload: userLoginRequestType}) {
    const response = yield call(tryLogin, payload.email, payload.password);

    if(response.state === true) {
        yield put({ type: ActionType.LOGIN_SUCCESS, payload: response.data });
    } else {
        yield put({ type: ActionType.LOGIN_ERROR, payload: response.message });
    }
};

function* loginResetSaga() {
    yield put({ type: ActionType.LOGIN_RESET});
};


function* onLoginRequestWatcher() {
    yield takeLatest(ActionType.LOGIN_REQUEST as any, loginSaga);
    yield takeLatest(ActionType.LOGIN_RESET as any, loginResetSaga);
}

export default [
    fork(onLoginRequestWatcher),
];