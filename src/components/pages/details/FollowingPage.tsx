import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { FollowMain, FollowUsers } from 'styles';
import {
    DefaultNavComponent,
    FooterComponent,
    FollowListElement
} from 'components';

import useFollow from 'hooks/useFollow';

interface RouteParams {
    user_name: string
}

function FollowingPage() {

    const params = useParams<RouteParams>();

    const {
        following_state,
        __handleGetFollowingList,
        __handleClickFollowButton,
        __handleClickUnFollowButton
    } = useFollow();


    useEffect(() => {
        if(following_state.state === 'idle') {
            __handleGetFollowingList(params.user_name);
        }
    });


    return (
        <div>
            <DefaultNavComponent/>
            <FollowMain>
                <FollowUsers>
                    {following_state.state === "success" && following_state.list.map((e: any, i: number) =>
                            <FollowListElement
                                key={i}
                                list_type={'following'}
                                user_id={e.user_id}
                                profile_image = {e.profile_image}
                                user_name = {e.user_name}
                                user_profile_name  = {e.user_profile_name}
                                followstate = {e.mefollowing}
                                clickUnFollowButton = {__handleClickUnFollowButton}
                                clickFollowButton = {__handleClickFollowButton}
                            />
                        )

                    }
                </FollowUsers>
            </FollowMain>
            <FooterComponent/>
        </div>
    );
}

export default FollowingPage;