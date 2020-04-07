import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import * as commonTypes from 'modules/commonTypes';

export type SetPostTagAction = ActionType<typeof actions>;

export type PostsState = commonTypes.PostsStateType;