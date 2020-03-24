import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { PostsStateType } from 'modules/types';

export type SetPostTagAction = ActionType<typeof actions>;

export type PostsState = PostsStateType;