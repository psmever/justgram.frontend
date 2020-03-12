import React, { useEffect } from 'react';
import {
    DefaultNavComponent,
    FooterComponent,
    ProfilePageHeaderComponent
} from 'components';
// import { getCookie } from "lib/Helper";
import useUserProfileData from 'hooks/useUserProfileData';



import image_feedPhoto from 'assets/images/feedPhoto.jpg';

function ProfilePage() {
    // const avatar_image = getCookie("login_profile_image_url");


    const {
        getUserProfileData,
        profile_state
    } = useUserProfileData();

    useEffect(() => {
        getUserProfileData();
    },[])

    useEffect(() => {
        if(profile_state.state === "success") {
            console.debug(profile_state);
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
                    <div className="profile__photo">
                        <img src={ image_feedPhoto } alt="feedphoto"/>
                        <div className="profile__photo-overlay">
                            <span className="overlay__item"><i className="fa fa-heart"></i>486</span>
                            <span className="overlay__item"><i className="fa fa-comment"></i>344</span>
                        </div>
                    </div>
                    <div className="profile__photo">
                        <img src={ image_feedPhoto } alt="feedphoto"/>
                        <div className="profile__photo-overlay">
                            <span className="overlay__item"><i className="fa fa-heart"></i>486</span>
                            <span className="overlay__item"><i className="fa fa-comment"></i>344</span>
                        </div>
                    </div>
                    <div className="profile__photo">
                        <img src={ image_feedPhoto } alt="feedphoto"/>
                        <div className="profile__photo-overlay">
                            <span className="overlay__item"><i className="fa fa-heart"></i>486</span>
                            <span className="overlay__item"><i className="fa fa-comment"></i>344</span>
                        </div>
                    </div>
                    <div className="profile__photo">
                        <img src={ image_feedPhoto } alt="feedphoto"/>
                        <div className="profile__photo-overlay">
                            <span className="overlay__item"><i className="fa fa-heart"></i>486</span>
                            <span className="overlay__item"><i className="fa fa-comment"></i>344</span>
                        </div>
                    </div>
                </section>
            </main>




            <FooterComponent/>
        </div>
    );
}

export default ProfilePage;