import { GetProfileDataState } from './types';
import { ActionType } from 'modules/models';
import createReducer from 'modules/createReducer';
import * as commonTypes from 'modules/commonTypes';

const initialState: GetProfileDataState = {
    state: 'idle'
}

export const getProfileDataReducer = createReducer(initialState, {
    [ActionType.GET_PROFILE_PAGE_DATA_REQUEST](state: commonTypes.getProfileDataActionRequestType, action: commonTypes.Action<commonTypes.getUserProfileDataResponseType>) {
        return {
            ...state,
            state: 'loading'
        };
    },
    [ActionType.GET_PROFILE_PAGE_DATA_SUCCESS](state: commonTypes.getUserProfileDataResponseType, action: commonTypes.Action<commonTypes.getUserProfileDataResponseType>) {
        return {
            ...state,
            state: 'success',
            user_name: action.payload.user_name,
            profile_image: {
                url: action.payload.profile_image?.url,
                secure_url: action.payload.profile_image?.secure_url,
            },
            count_info: {
                posts: action.payload.count_info?.posts,
                followers: action.payload.count_info?.followers,
                following: action.payload.count_info?.following,
            },
            profile: {
                name: action.payload.profile?.name,
                web_site: action.payload.profile?.web_site,
                bio: action.payload.profile?.bio,
                gender: action.payload.profile?.gender
            },
            posts: action.payload.posts

        }
    }
});
export default getProfileDataReducer;