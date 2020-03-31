import React, { useEffect } from 'react';
import {
    DefaultNavComponent,
    FooterComponent,
    ProfilePageHeaderComponent,
    ProfilePostListComponent
} from 'components';
import { getUserProfileDataResponsePostType } from "modules/types";
import useUserProfileData from 'hooks/useUserProfileData';
import { useParams } from 'react-router-dom';

interface RouteParams {
    user_name: string
}

function ProfilePage() {
    const params = useParams<RouteParams>();
    const {
        getUserProfileData,
        profile_state,
        userPosts
    } = useUserProfileData();

    useEffect(() => {
        getUserProfileData(params.user_name);
    // TODO::경고 제거.
    // eslint-disable-next-line react-hooks/exhaustive-deps,
    },[])

    useEffect(() => {
        if(profile_state.state === "success") {
        }
    }, [profile_state]);

    return (
        <div>

            <DefaultNavComponent/>

            <main id="profile">
                <ProfilePageHeaderComponent
                    avatar_image={profile_state.profile_image?.secure_url}
                    username={profile_state.profile?.name}
                    count_info={profile_state.count_info}
                    bio={profile_state.profile?.bio}
                    web_site={profile_state.profile?.web_site}
                />

                <section className="profile__photos">
                    {profile_state.state === 'success' && userPosts && userPosts.map((e: getUserProfileDataResponsePostType,i:any) =>
                        <ProfilePostListComponent
                            key={i}
                            post_id={e.post_id}
                            photo_url={e.image.secure_url}
                            comment_count={e.count.comment_count}
                            heart_count={e.count.heart_count}
                        />

                    )}

                </section>
            </main>




            <FooterComponent/>
        </div>
    );
}

export default ProfilePage;