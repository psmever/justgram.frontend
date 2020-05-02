import React, { FormEvent } from 'react';
import * as commonTypes from "modules/commonTypes";
import {LoadingPage} from "components";
import {
    EditProfileForm,
    EditProfileFormRow,
    EditProfileFormInput,
    EditProfileFormTextarea,
    EditProfileFormLavel,
    EditProfileFormLoading,
    EditProfileFormSubmit,
} from 'styles';

interface EditProfileFormProps {
    userProfile: commonTypes.Nullable<commonTypes.APIResponseSubDataInfoType>
    handleChangeName: (name: string) => void;
    handleChangeWebSite: (website: string) => void;
    handleChangeBio: (bio: string) => void;
    handleChangePhoneNumber: (phonenumber: string) => void;
    handleChangeGender: ( gender: string ) => void;
    handleSubmit: ( event: FormEvent<HTMLFormElement>) => void;
    genderCode: [] | undefined;
    getProfileDataState: commonTypes.SagaStatus
    profileDataUpdateState: commonTypes.SagaStatus
}

function EditProfileFormComponent({
    userProfile,
    handleChangeName,
    handleChangeWebSite,
    handleChangeBio,
    handleChangePhoneNumber,
    handleChangeGender,
    handleSubmit,
    genderCode,
    getProfileDataState,
    profileDataUpdateState
}: EditProfileFormProps) {
    //TODO: genderCode 3번 바뀜.
    return (
        <EditProfileForm onSubmit={ handleSubmit }>
            {
                getProfileDataState === 'loading'
                ?
                    <EditProfileFormRow>
                        <EditProfileFormLoading>
                            <LoadingPage type={'Circles'} color={'#00BFFF'} height={25} width={25} />
                        </EditProfileFormLoading>
                    </EditProfileFormRow>
                :
                <>
                    <EditProfileFormRow>
                        <EditProfileFormLavel htmlFor="user-name" className="form__label">Username:</EditProfileFormLavel>
                        <EditProfileFormInput
                            id="username"
                            type="text"
                            disabled
                            value={userProfile?.user_name}
                        />
                    </EditProfileFormRow>
                    <EditProfileFormRow>
                        <EditProfileFormLavel htmlFor="full-name" className="form__label">Name:</EditProfileFormLavel>
                        <EditProfileFormInput
                            id="name"
                            type="text"
                            onChange={ e => handleChangeName(e.target.value)}
                            value={userProfile?.name}
                        />
                    </EditProfileFormRow>
                    <EditProfileFormRow>
                        <EditProfileFormLavel htmlFor="website" className="form__label">Website:</EditProfileFormLavel>
                        <EditProfileFormInput
                            id="website"
                            type="url"
                            onChange={ e => handleChangeWebSite(e.target.value)}
                            value={userProfile?.web_site}
                        />
                    </EditProfileFormRow>
                    <EditProfileFormRow>
                        <EditProfileFormLavel htmlFor="bio" className="form__label">Bio:</EditProfileFormLavel>
                        <EditProfileFormTextarea
                            id="bio"
                            onChange={e => handleChangeBio(e.target.value)}
                            value={userProfile?.bio}
                        ></EditProfileFormTextarea>
                    </EditProfileFormRow>
                    <EditProfileFormRow>
                        <EditProfileFormLavel htmlFor="phone" className="form__label">Phone Number:</EditProfileFormLavel>
                        <EditProfileFormInput
                            id="phonenumber"
                            type="tel"
                            value={userProfile?.phone_number}
                            onChange={ e => handleChangePhoneNumber(e.target.value)}
                        />
                    </EditProfileFormRow>
                    <EditProfileFormRow>
                        <EditProfileFormLavel htmlFor="gender" className="form__label">Gender:</EditProfileFormLavel>
                        <select id="gender"
                            onChange={ e => handleChangeGender(e.target.value)}
                            value={userProfile?.gender}
                        >
                        {genderCode && genderCode.map((item) => {
                            return (
                                <option key={item['code_id']} value={item['code_id']}>{item['code_name']}</option>
                            )
                        })}


                        </select>
                    </EditProfileFormRow>
                    <EditProfileFormRow>
                    {
                        profileDataUpdateState === 'loading'
                        ?
                            <EditProfileFormLoading>
                                <LoadingPage type={'Circles'} color={'#00BFFF'} height={25} width={25} />
                            </EditProfileFormLoading>
                        : <EditProfileFormSubmit/>
                    }
                    </EditProfileFormRow>
                </>
            }
        </EditProfileForm>
    );
}

export default EditProfileFormComponent;