import * as React from 'react';

import {
    DefaultNavComponent,
    FooterComponent
} from 'resources/components';

import { EditProfileFormContainer} from 'resources/containers';

import image_avatar from 'assets/images/avatar.jpg';

function EditProfilePage() {
    return (
        <div>

            <DefaultNavComponent/>

            <main id="edit-profile">
                <div className="edit-profile__container">

                    <header className="edit-profile__header">
                        <div className="edit-profile__avatar-container">
                            <img src={ image_avatar } className="edit-profile__avatar" alt="avatar"/>
                        </div>
                        <h4 className="edit-profile__username">serranoarevalo</h4>
                    </header>

                    <EditProfileFormContainer />

                </div>
            </main>

            <FooterComponent/>
        </div>
    );
}

export default EditProfilePage;