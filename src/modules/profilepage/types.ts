import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import * as commonTypes from 'modules/commonTypes';

export type GetProfileDataAction = ActionType<typeof actions>;

export type GetProfileDataState = commonTypes.getUserProfileDataResponseType;