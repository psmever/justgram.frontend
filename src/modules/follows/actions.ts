import { ActionType } from 'modules/models';
import { UserFollowListRequestType, UserFollowRequestType} from 'modules/types';

export const requestGetFollowerslistAction = (payload: UserFollowListRequestType) => {
    return {
        type: ActionType.GET_USER_FOLLOWERS_LIST_REQUEST,
        payload
    }
}

export const requestGetFollowinglistAction = (payload: UserFollowListRequestType) => {
    return {
        type: ActionType.GET_USER_FOLLOWING_LIST_REQUEST,
        payload
    }
}


export const requestUserFollowAction = (payload: UserFollowRequestType) => {
    return {
        type: ActionType.USER_FOLLOW_REQUEST,
        payload
    }
}

export const requestUserUnFollowAction = (payload: UserFollowRequestType) => {
    return {
        type: ActionType.USER_UNFOLLOW_REQUEST,
        payload
    }
}