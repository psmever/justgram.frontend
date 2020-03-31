import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';

import {
    DefaultNavComponent,
    FooterComponent,
    FollowListElement
} from 'components';

import useFollow from 'hooks/useFollow';

interface RouteParams {
    user_name: string
}

function FollowersPage() {

    const params = useParams<RouteParams>();

    const {
        followers_state,
        __handleGetFollowersList,
        __handleClickFollowButton,
        __handleClickUnFollowButton
    } = useFollow();


    useEffect(() => {
        if(followers_state.state === 'yet') {
            __handleGetFollowersList(params.user_name);
        }
    });

    return (
        <div>
            <DefaultNavComponent/>
            <main id="explore">
                <ul className="explore__users">
                    {followers_state.state === "success" && followers_state.list.map((e: any, i: number) =>
                        <FollowListElement
                            key={i}
                            list_type={'followers'}
                            user_id={e.user_id}
                            profile_image = {e.profile_image}
                            user_name = {e.user_name}
                            user_profile_name  = {e.user_profile_name}
                            followstate = {e.targetfollowing}
                            clickUnFollowButton = {__handleClickUnFollowButton}
                            clickFollowButton = {__handleClickFollowButton}
                        />
                    )}
                </ul>
            </main>
            <FooterComponent/>
        </div>
    );
}

export default FollowersPage;