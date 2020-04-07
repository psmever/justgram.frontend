import { put, takeLatest, fork, call } from "redux-saga/effects";
import * as commonTypes from 'modules/commonTypes';
import { getUserProfilePageData } from 'lib/API';
import { ActionType } from 'modules/models';

function* getProfileDataSaga({ payload }: {payload: commonTypes.getProfileDataActionRequestType}) {
    const response = yield call(getUserProfilePageData, payload);
    if(response.state === true) {
        yield put({ type: ActionType.GET_PROFILE_PAGE_DATA_SUCCESS, payload: response.data});
    }
}

function* onGetProfileDataWatcher() {
    yield takeLatest(ActionType.GET_PROFILE_PAGE_DATA_REQUEST as any, getProfileDataSaga);
}

export default [
    fork(onGetProfileDataWatcher)
];