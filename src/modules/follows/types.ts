import * as actios from './actions';
import { ActionType } from 'typesafe-actions';
import * as commonTypes from 'modules/commonTypes';

export type SetRequestFollowListAction = ActionType<typeof actios>;

export type FollowsState = commonTypes.FollowsStateType;