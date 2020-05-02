import * as React from 'react';
import {
    EditProfileMain,
    EditProfileContainer,
    EditProfileHeader,
    EditProfileUsername,
    EditProfileAvatarContainer,
} from 'styles';
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
        genderCode,
        getProfileDataState,
        profileDataUpdateState
    } = useEditProfile();

    return (
        <div>

            <DefaultNavComponent/>

            <EditProfileMain>
                <EditProfileContainer>

                    <EditProfileHeader>
                        {/* <div className="edit-profile__avatar-container">
                            <img src={ image_avatar } className="edit-profile__avatar" alt="avatar"/>
                        </div> */}

                        <EditProfileAvatarContainer>
                            <ProfileImageComponent/>
                        </EditProfileAvatarContainer>

                        <EditProfileUsername>{ profileData?.user_name }</EditProfileUsername>
                    </EditProfileHeader>

                    <EditProfileFormComponent
                        userProfile={profileData}
                        handleChangeName={handleChangeName}
                        handleChangeWebSite={handleChangeWebSite}
                        handleChangeBio={handleChangeBio}
                        handleChangePhoneNumber={handleChangePhoneNumber}
                        handleChangeGender={handleChangeGender}
                        handleSubmit={handleSubmit}
                        genderCode={genderCode}
                        getProfileDataState={getProfileDataState}
                        profileDataUpdateState={profileDataUpdateState}
                    />

                </EditProfileContainer>
            </EditProfileMain>

            <FooterComponent/>
        </div>
    );
}

export default EditProfilePage;