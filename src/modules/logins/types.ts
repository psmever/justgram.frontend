import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { loginSagaInterface } from 'modules/interface';

export type LoginAction = ActionType<typeof actions>;

export type LoginState = loginSagaInterface;