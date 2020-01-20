import { createAsyncAction } from 'typesafe-actions';
import { apiRequestInterface } from 'lib/API';
import { AxiosError } from 'axios';

export const LOGIN_REQUEST = 'login/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'login/LOGIN_SUCCESS';
export const LOGIN_ERROR = 'login/LOGIN_ERROR';

export const tryLoginAsync = createAsyncAction(
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR
)<object, apiRequestInterface, AxiosError>();






