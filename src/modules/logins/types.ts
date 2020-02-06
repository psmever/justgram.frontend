import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { loginSagaResponseType } from 'modules/types';

export type LoginAction = ActionType<typeof actions>;

export type LoginState = loginSagaResponseType;