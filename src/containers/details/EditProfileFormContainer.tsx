import * as React from 'react';
import { EditProfileFormComponent } from "components";
import useEditProfile from 'hooks/useEditProfile';

function EditProfileFormContainer() {

    const {
        handleChangeBio,
        handleChangeName,
        handleChangePhoneNumber,
        handleChangeWebSite,
        handleSubmit
    } = useEditProfile();

    return (
        <>
            <EditProfileFormComponent
                username="test"
                handleChangeName={handleChangeName}
                handleChangeWebSite={handleChangeWebSite}
                handleChangeBio={handleChangeBio}
                handleChangePhoneNumber={handleChangePhoneNumber}
                handleSubmit={handleSubmit}
            />
        </>
    );
}

export default EditProfileFormContainer;