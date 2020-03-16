import {  } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProfileDataAction } from 'modules/profilepage';
import { RootState } from 'modules';

export default function useUserProfileData() {

    const profile_state = useSelector((state: RootState) => state.profilepage_state);
    const dispatch = useDispatch();

    const getUserProfileData = async (user_name: string | undefined) => {
        if(user_name) {
            dispatch(getProfileDataAction({
                user_name: user_name
            }))
        }
    }

    return {
        getUserProfileData,
        profile_state
    };
}