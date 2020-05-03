import { put, takeLatest, fork, call } from "redux-saga/effects";
import * as commonTypes from 'modules/commonTypes';
import { tryLogin } from 'lib/API';
import { setLoginCookie } from 'lib/Helper';
import { ActionType } from 'modules/models';
import default_avata from 'assets/images/default_profile.jpg';

/**
 * 로그인 사가.
 * @param actions
 * @constructor
 */
function* loginSaga({ payload }: {payload: commonTypes.userLoginRequestType}) {
    const response = yield call(tryLogin, payload.email, payload.password);
    if(response.state === true) {
        yield put({ type: ActionType.LOGIN_SUCCESS, payload: response.data });
        if(response.data.profile_image_url === null) {
            response.data.profile_image_url = default_avata;
        }
        setLoginCookie(response.data); // 쿠키에 저장.
    } else {
        yield put({ type: ActionType.LOGIN_ERROR, payload: response.message });
    }
};

function* onLoginRequestWatcher() {
    yield takeLatest(ActionType.LOGIN_REQUEST as any, loginSaga);
}

export default [
    fork(onLoginRequestWatcher),
];