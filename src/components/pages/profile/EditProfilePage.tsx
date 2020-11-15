import React from 'react';
import {
    EditProfileStyle,
    EditProfileContainer,
    EditProfileHeader,
    EditProfileAvatarContainer,
    EditProfileAvatarContainerImage,
    EditProfileHeaderUserName,
    EditProfileForm,
    EditProfileFormRow,
    EditProfileFormRowLabel,
    EditProfileFormInput,
    EditProfileFormTextarea,
    EditProfileFormSelect,
    EditProfileFormButton,
} from 'styled/EditProfile';

export default function EditProfilePage() {

    return (
        <React.Fragment>
            <EditProfileStyle>
                <EditProfileContainer>
                    <EditProfileHeader>
                        <EditProfileAvatarContainer>
                            <EditProfileAvatarContainerImage src={process.env.PUBLIC_URL + '/assets/images/avatar.jpg'} alt="" />
                        </EditProfileAvatarContainer>
                        <EditProfileHeaderUserName>just gram</EditProfileHeaderUserName>
                    </EditProfileHeader>
                    <EditProfileForm>
                        <EditProfileFormRow>
                            <EditProfileFormRowLabel htmlFor="full-name">Name:</EditProfileFormRowLabel>
                            <EditProfileFormInput id="full-name" type="text" />
                        </EditProfileFormRow>
                        <EditProfileFormRow>
                            <EditProfileFormRowLabel htmlFor="user-name">Username:</EditProfileFormRowLabel>
                            <EditProfileFormInput id="user-name" type="text" />
                        </EditProfileFormRow>
                        <EditProfileFormRow>
                            <EditProfileFormRowLabel htmlFor="website">Website:</EditProfileFormRowLabel>
                            <EditProfileFormInput id="website" type="url" />
                        </EditProfileFormRow>
                        <EditProfileFormRow>
                            <EditProfileFormRowLabel htmlFor="bio">Bio:</EditProfileFormRowLabel>
                            <EditProfileFormTextarea id="bio"></EditProfileFormTextarea>
                        </EditProfileFormRow>
                        <EditProfileFormRow>
                            <EditProfileFormRowLabel htmlFor="email">Email:</EditProfileFormRowLabel>
                            <EditProfileFormInput id="email" type="email" />
                        </EditProfileFormRow>
                        <EditProfileFormRow>
                            <EditProfileFormRowLabel htmlFor="phone">Phone Number:</EditProfileFormRowLabel>
                            <EditProfileFormInput id="phone" type="tel" />
                        </EditProfileFormRow>
                        <EditProfileFormRow>
                            <EditProfileFormRowLabel htmlFor="gender">Gender:</EditProfileFormRowLabel>
                            <EditProfileFormSelect id="gender">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="cant">Can't remember</option>
                            </EditProfileFormSelect>
                        </EditProfileFormRow>
                        <EditProfileFormButton>Submit</EditProfileFormButton>
                    </EditProfileForm>
                </EditProfileContainer>
            </EditProfileStyle>
        </React.Fragment>
    );
}