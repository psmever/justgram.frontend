import * as React from 'react';
import { EditProfileFormComponent } from "components";
import useEditProfile from 'hooks/useEditProfile';

function EditProfileFormContainer() {

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
    );
}

export default EditProfileFormContainer;