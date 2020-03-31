import { Action, FollowsStateType, APIResponseSubDataInfoType, followingAPIResponseType, followersAPIResponseType} from 'modules/types';
import createReducer from 'modules/createReducer';
import { ActionType } from 'modules/models';

const initialState: FollowsStateType = {
    following: {
        state: 'yet',
        list: [],
    },
    followers: {
        state: 'yet',
        list: [],
    },
    follow: {
        state: 'yet',
    },
    unfollow: {
        state: 'yet',
    }
}

export const exploresReducer = createReducer(initialState, {
    [ActionType.GET_USER_FOLLOWING_LIST_SUCCESS](state: FollowsStateType, action: Action<followingAPIResponseType>) {
        return {
            ...state,
            following: {
                state: 'success',
                list: state.following.list.concat(action.payload.following_list)
            }
        }
    },
    [ActionType.GET_USER_FOLLOWING_LIST_ERROR](state: FollowsStateType, action: Action<APIResponseSubDataInfoType>) {
        return {
            ...state,
            following: {
                'state': 'failure',
            }
        }
    },
    [ActionType.GET_USER_FOLLOWERS_LIST_SUCCESS](state: FollowsStateType, action: Action<followersAPIResponseType>) {
        return {
            ...state,
            followers: {
                'state': 'success',
                list: state.followers.list.concat(action.payload.followers_list)
            }
        }
    },
    [ActionType.GET_USER_FOLLOWERS_LIST_ERROR](state: FollowsStateType, action: Action<APIResponseSubDataInfoType>) {
        return {
            ...state,
            followers: {
                'state': 'failure',
            }
        }
    },
    [ActionType.USER_FOLLOW_SUCCESS](state: FollowsStateType) {
        return {
            ...state,
            follow: {
                'state': 'success',
            }
        }
    },
    [ActionType.USER_FOLLOW_ERROR](state: FollowsStateType) {
        return {
            ...state,
            follow: {
                'state': 'failure',
            }
        }
    },
    [ActionType.USER_UNFOLLOW_SUCCESS](state: FollowsStateType) {
        return {
            ...state,
            unfollow: {
                'state': 'success',
            }
        }
    },
    [ActionType.USER_UNFOLLOW_ERROR](state: FollowsStateType) {
        return {
            ...state,
            unfollow: {
                'state': 'failure',
            }
        }
    },
});

export default exploresReducer;