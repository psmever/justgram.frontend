import * as actios from './actions';
import { ActionType } from 'typesafe-actions';
import { FollowsStateType } from 'modules/types';

export type SetRequestFollowListAction = ActionType<typeof actios>;

export type FollowsState = FollowsStateType;