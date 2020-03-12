import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { getUserProfileDataResponseType } from 'modules/types';

export type GetProfileDataAction = ActionType<typeof actions>;

export type GetProfileDataState = getUserProfileDataResponseType;