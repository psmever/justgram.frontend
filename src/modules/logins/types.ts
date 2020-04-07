import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import * as commonTypes from 'modules/commonTypes';

export type LoginAction = ActionType<typeof actions>;

export type LoginState = commonTypes.loginSagaResponseType;