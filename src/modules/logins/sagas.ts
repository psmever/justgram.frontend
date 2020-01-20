import { tryLoginAsync, LOGIN_REQUEST } from "./actions";
import { doLogin, apiRequestInterface} from "lib/API";
import { call, put, takeEvery } from "redux-saga/effects";

function* LoginSaga(actions: ReturnType<typeof tryLoginAsync.request>) {

    try {
        const login: apiRequestInterface = yield call(doLogin, 'psmever@gmail.com','1212');
        console.debug(login);
        yield put(tryLoginAsync.success(login));
    } catch (e) {
        yield put(tryLoginAsync.failure(e));
    }
}

export function* loginSaga() {
    yield takeEvery(LOGIN_REQUEST, LoginSaga);
}


