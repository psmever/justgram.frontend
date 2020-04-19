import React, { FormEvent } from 'react';
import * as commonTypes from "modules/commonTypes";
import {LoadingPage} from "components";

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
        <form className="edit-profile__form" onSubmit={ handleSubmit }>
            {
                getProfileDataState === 'loading'
                ?
                <>
                    <div className="form__row">
                        <div className="form__loading">
                            <LoadingPage type={'Circles'} color={'#00BFFF'} height={25} width={25} />
                        </div>
                    </div>
                </>
                :
                <>
                    <div className="form__row">
                        <label htmlFor="user-name" className="form__label">Username:</label>
                        <input
                            id="username"
                            type="text"
                            className="form__input"
                            disabled
                            value={userProfile?.user_name}
                        />
                    </div>
                    <div className="form__row">
                        <label htmlFor="full-name" className="form__label">Name:</label>
                        <input
                            id="name"
                            type="text"
                            className="form__input"
                            onChange={ e => handleChangeName(e.target.value)}
                            value={userProfile?.name}
                        />
                    </div>
                    <div className="form__row">
                        <label htmlFor="website" className="form__label">Website:</label>
                        <input
                            id="website"
                            type="url"
                            className="form__input"
                            onChange={ e => handleChangeWebSite(e.target.value)}
                            value={userProfile?.web_site}
                        />
                    </div>
                    <div className="form__row">
                        <label htmlFor="bio" className="form__label">Bio:</label>
                        <textarea
                            id="bio"
                            onChange={e => handleChangeBio(e.target.value)}
                            value={userProfile?.bio}
                        ></textarea>
                    </div>
                    <div className="form__row">
                        <label htmlFor="phone" className="form__label">Phone Number:</label>
                        <input
                            id="phonenumber"
                            type="tel"
                            className="form__input"
                            value={userProfile?.phone_number}
                            onChange={ e => handleChangePhoneNumber(e.target.value)}
                        />
                    </div>
                    <div className="form__row">
                        <label htmlFor="gender" className="form__label">Gender:</label>
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
                    </div>
                    <div className="form__row">
                    {
                        profileDataUpdateState === 'loading'
                        ?
                            <div className="form__loading">
                                <LoadingPage type={'Circles'} color={'#00BFFF'} height={25} width={25} />
                            </div>
                        : <input type="submit" value="저장"/>
                    }
                    </div>
                </>
            }


        </form>
    );
}

export default EditProfileFormComponent;