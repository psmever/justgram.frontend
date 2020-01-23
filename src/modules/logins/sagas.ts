import { tryLoginAsync, LOGIN_START } from "./actions";
import { doLogin, apiRequestInterface} from "lib/API";
import { call, put, takeEvery } from "redux-saga/effects";

function* LoginSaga(actions: ReturnType<typeof tryLoginAsync.request>) {
    try {
        const loginResult: apiRequestInterface = yield call(doLogin, actions.payload);
        // console.debug(loginResult);
        if(loginResult.state) {
            yield put(tryLoginAsync.success(loginResult));
        } else {
            // yield put(tryLoginAsync.failure(loginResult.error));
        }
    } catch (e) {
        yield put(tryLoginAsync.failure(e));

    }
}

export function* loginSaga() {
    yield takeEvery(LOGIN_START, LoginSaga);
}


