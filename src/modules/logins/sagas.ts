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
        // storageManager.set("login_info", response.data); // 로그인 정보 로컬 스토리지에 저장.
        if(response.data.profile_image_url === null) {
            response.data.profile_image_url = default_avata;
        }
        setLoginCookie(response.data); // 쿠키에 저장.
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