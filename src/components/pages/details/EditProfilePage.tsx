import * as React from 'react';

import {
    DefaultNavComponent,
    FooterComponent
} from 'components';

import useEditProfile from 'hooks/useEditProfile';

import { EditProfileFormComponent, ProfileImageComponent } from 'components';

function EditProfilePage() {

    const {
        profileData,
        handleChangeBio,
        handleChangeName,
        handleChangePhoneNumber,
        handleChangeWebSite,
        handleChangeGender,
        handleSubmit,
        genderCode
    } = useEditProfile();



    return (
        <div>

            <DefaultNavComponent/>

            <main id="edit-profile">
                <div className="edit-profile__container">

                    <header className="edit-profile__header">
                        {/* <div className="edit-profile__avatar-container">
                            <img src={ image_avatar } className="edit-profile__avatar" alt="avatar"/>
                        </div> */}

                        <div className="edit-profile__avatar-container">
                            <ProfileImageComponent/>
                        </div>

                        <h4 className="edit-profile__username">{ profileData?.user_name }</h4>
                    </header>

                    <EditProfileFormComponent
                        userProfile={profileData}
                        handleChangeName={handleChangeName}
                        handleChangeWebSite={handleChangeWebSite}
                        handleChangeBio={handleChangeBio}
                        handleChangePhoneNumber={handleChangePhoneNumber}
                        handleChangeGender={handleChangeGender}
                        handleSubmit={handleSubmit}
                        genderCode={genderCode}
                    />

                </div>
            </main>

            <FooterComponent/>
        </div>
    );
}

export default EditProfilePage;