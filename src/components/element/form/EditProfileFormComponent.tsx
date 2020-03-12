import React, { FormEvent } from 'react';
import {Nullable, APIResponseSubDataInfoType} from "modules/types";

interface EditProfileFormProps {
    userProfile: Nullable<APIResponseSubDataInfoType>
    handleChangeName: (name: string) => void;
    handleChangeWebSite: (website: string) => void;
    handleChangeBio: (bio: string) => void;
    handleChangePhoneNumber: (phonenumber: string) => void;
    handleChangeGender: ( gender: string ) => void;
    handleSubmit: ( event: FormEvent<HTMLFormElement>) => void;
    genderCode: [] | undefined;
}

function EditProfileFormComponent({
    userProfile,
    handleChangeName,
    handleChangeWebSite,
    handleChangeBio,
    handleChangePhoneNumber,
    handleChangeGender,
    handleSubmit,
    genderCode
}: EditProfileFormProps) {
    //TODO: genderCode 3번 바뀜.
    // console.debug(genderCode);
    // console.debug(userProfile);
    return (
        <form className="edit-profile__form" onSubmit={ handleSubmit }>
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
            <input type="submit" value="Submit"/>
        </form>
    );
}

export default EditProfileFormComponent;