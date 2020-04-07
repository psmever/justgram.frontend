import * as commonTypes from 'modules/commonTypes';
import createReducer from 'modules/createReducer';
import { ActionType } from 'modules/models';

const initialState: commonTypes.FollowsStateType = {
    following: {
        state: 'idle',
        list: [],
    },
    followers: {
        state: 'idle',
        list: [],
    },
    follow: {
        state: 'idle',
    },
    unfollow: {
        state: 'idle',
    }
}

export const exploresReducer = createReducer(initialState, {
    [ActionType.GET_USER_FOLLOWING_LIST_SUCCESS](state: commonTypes.FollowsStateType, action: commonTypes.Action<commonTypes.followingAPIResponseType>) {
        return {
            ...state,
            following: {
                state: 'success',
                list: state.following.list.concat(action.payload.following_list)
            }
        }
    },
    [ActionType.GET_USER_FOLLOWING_LIST_ERROR](state: commonTypes.FollowsStateType, action: commonTypes.Action<commonTypes.APIResponseSubDataInfoType>) {
        return {
            ...state,
            following: {
                'state': 'failure',
            }
        }
    },
    [ActionType.GET_USER_FOLLOWERS_LIST_SUCCESS](state: commonTypes.FollowsStateType, action: commonTypes.Action<commonTypes.followersAPIResponseType>) {
        return {
            ...state,
            followers: {
                'state': 'success',
                list: state.followers.list.concat(action.payload.followers_list)
            }
        }
    },
    [ActionType.GET_USER_FOLLOWERS_LIST_ERROR](state: commonTypes.FollowsStateType, action: commonTypes.Action<commonTypes.APIResponseSubDataInfoType>) {
        return {
            ...state,
            followers: {
                'state': 'failure',
            }
        }
    },
    [ActionType.USER_FOLLOW_SUCCESS](state: commonTypes.FollowsStateType) {
        return {
            ...state,
            follow: {
                'state': 'success',
            }
        }
    },
    [ActionType.USER_FOLLOW_ERROR](state: commonTypes.FollowsStateType) {
        return {
            ...state,
            follow: {
                'state': 'failure',
            }
        }
    },
    [ActionType.USER_UNFOLLOW_SUCCESS](state: commonTypes.FollowsStateType) {
        return {
            ...state,
            unfollow: {
                'state': 'success',
            }
        }
    },
    [ActionType.USER_UNFOLLOW_ERROR](state: commonTypes.FollowsStateType) {
        return {
            ...state,
            unfollow: {
                'state': 'failure',
            }
        }
    },
});

export default exploresReducer;