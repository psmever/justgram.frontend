import React, { FormEvent } from 'react';

interface EditProfileFormProps {
    username: string;
    handleChangeName: (name: string) => void;
    handleChangeWebSite: (website: string) => void;
    handleChangeBio: (bio: string) => void;
    handleChangePhoneNumber: (phonenumber: string) => void;
    handleSubmit: ( event: FormEvent<HTMLFormElement>) => void;
}

function EditProfileFormComponent({
    username,
    handleChangeName,
    handleChangeWebSite,
    handleChangeBio,
    handleChangePhoneNumber,
    handleSubmit
}: EditProfileFormProps) {
    return (
        <form className="edit-profile__form" onSubmit={ handleSubmit }>
            <div className="form__row">
                <label htmlFor="user-name" className="form__label">Username:</label>
                <input
                    id="username"
                    type="text"
                    className="form__input"
                    disabled
                    value={username}
                />
            </div>
            <div className="form__row">
                <label htmlFor="full-name" className="form__label">Name:</label>
                <input
                    id="name"
                    type="text"
                    className="form__input"
                    onChange={ e => handleChangeName(e.target.value)}
                />
            </div>
            <div className="form__row">
                <label htmlFor="website" className="form__label">Website:</label>
                <input
                    id="website"
                    type="url"
                    className="form__input"
                    onChange={ e => handleChangeWebSite(e.target.value)}
                />
            </div>
            <div className="form__row">
                <label htmlFor="bio" className="form__label">Bio:</label>
                <textarea
                    id="bio"
                    onChange={e => handleChangeBio(e.target.value)}
                ></textarea>
            </div>
            <div className="form__row">
                <label htmlFor="phone" className="form__label">Phone Number:</label>
                <input
                    id="phonenumber"
                    type="tel"
                    className="form__input"
                    onChange={ e => handleChangePhoneNumber(e.target.value)}
                />
            </div>
            <div className="form__row">
                <label htmlFor="gender" className="form__label">Gender:</label>
                <select id="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="cant">Can't remember</option>
                </select>
            </div>
            <input type="submit" value="Submit"/>
        </form>
    );
}

export default EditProfileFormComponent;