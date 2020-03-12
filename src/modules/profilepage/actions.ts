import { getProfileDataActionRequestType } from 'modules/types';
import { ActionType } from 'modules/models';

export const getProfileDataAction = (payload: getProfileDataActionRequestType) => {
    return {
        type: ActionType.GET_PROFILE_PAGE_DATA_REQUEST,
        payload
    };
}