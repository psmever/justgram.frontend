import {  } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProfileDataAction } from 'modules/profilepage';
import { RootState } from 'modules';

export default function useUserProfileData() {

    const profile_state = useSelector((state: RootState) => state.profilepage_state);
    const dispatch = useDispatch();

    const getUserProfileData = async () => {
        if(profile_state.state === 'yet' || profile_state.state === 'failure') {
            dispatch(getProfileDataAction({
                user_name: 'psmever'
            }))
        }
    }

    return {
        getUserProfileData,
        profile_state
    };
}