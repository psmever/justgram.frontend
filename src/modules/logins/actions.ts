import { createAsyncAction } from 'typesafe-actions';
import { APIResponse } from 'modules/interface';

export const LOGIN_START = 'login/LOGIN_START';
export const LOGIN_SUCCESS = 'login/LOGIN_SUCCESS';
export const LOGIN_ERROR = 'login/LOGIN_ERROR';

export const tryLoginAsync = createAsyncAction(
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_ERROR
)<APIResponse, object, Error>();