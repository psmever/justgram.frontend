import { ActionType } from 'modules/models';
import * as commonTypes from 'modules/commonTypes';

export const requestGetFollowerslistAction = (payload: commonTypes.UserFollowListRequestType) => {
    return {
        type: ActionType.GET_USER_FOLLOWERS_LIST_REQUEST,
        payload
    }
}

export const requestGetFollowinglistAction = (payload: commonTypes.UserFollowListRequestType) => {
    return {
        type: ActionType.GET_USER_FOLLOWING_LIST_REQUEST,
        payload
    }
}


export const requestUserFollowAction = (payload: commonTypes.UserFollowRequestType) => {
    return {
        type: ActionType.USER_FOLLOW_REQUEST,
        payload
    }
}

export const requestUserUnFollowAction = (payload: commonTypes.UserFollowRequestType) => {
    return {
        type: ActionType.USER_UNFOLLOW_REQUEST,
        payload
    }
}