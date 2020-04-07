import * as commonTypes from 'modules/commonTypes';
import { ActionType } from 'modules/models';

export const getProfileDataAction = (payload: commonTypes.getProfileDataActionRequestType) => {
    return {
        type: ActionType.GET_PROFILE_PAGE_DATA_REQUEST,
        payload
    };
}