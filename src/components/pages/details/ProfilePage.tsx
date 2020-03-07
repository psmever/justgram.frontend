import * as React from 'react';
import {
    DefaultNavComponent,
    FooterComponent,
    ProfilePageHeaderComponent
} from 'components';

import { getCookie } from "lib/Helper";


import image_feedPhoto from 'assets/images/feedPhoto.jpg';

function ProfilePage() {

    const avatar_image = getCookie("login_profile_image_url");

    return (
        <div>

            <DefaultNavComponent/>

            <main id="profile">
                <ProfilePageHeaderComponent
                    avatar_image={avatar_image}
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