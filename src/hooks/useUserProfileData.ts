import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProfileDataAction } from 'modules/profilepage';
import { RootState } from 'modules';

export default function useUserProfileData() {

    const dispatch = useDispatch();
    const profile_state = useSelector((state: RootState) => state.profilepage_state);
    const [userPosts, setUserPosts] = useState<any>([]);

    const getUserProfileData = async (user_name: string | undefined) => {
        if(user_name) {
            dispatch(getProfileDataAction({
                user_name: user_name
            }))
        }
    }

    useEffect(() => {
        if(profile_state.state === 'success') {
            setUserPosts(profile_state.posts);
        }
    }, [profile_state])

    return {
        getUserProfileData,
        profile_state,
        userPosts
    };
}