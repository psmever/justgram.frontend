import { put, takeLatest, fork, call } from "redux-saga/effects";
import { getSiteData } from 'lib/API';
import { ActionType } from 'modules/models';
/**
 * 로그인 사가.
 * @param actions
 * @constructor
 */
function* getSiteDataSaga() {
    const response = yield call(getSiteData);

    if(response.state === true) {
        yield put({ type: ActionType.GET_ROOTDATA_SUCCESS, payload: response.data });
    } else {
        yield put({ type: ActionType.GET_ROOTDATA_ERROR, payload: response.message });
    }
};

function* onLoginRequestWatcher() {
    yield takeLatest(ActionType.GET_ROOTDATA_LOADING as any, getSiteDataSaga);
}

export default [
    fork(onLoginRequestWatcher),
];