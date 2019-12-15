import * as React from 'react';

import image_avatar from 'Assets/Images/avatar.jpg';

function EditProfileContainer() {
    return (
        <div>
            <main id="edit-profile">
                <div className="edit-profile__container">
                    <header className="edit-profile__header">
                        <div className="edit-profile__avatar-container">
                            <img src={ image_avatar } className="edit-profile__avatar" alt="avatar"/>
                        </div>
                        <h4 className="edit-profile__username">serranoarevalo</h4>
                    </header>
                    <form action="" className="edit-profile__form">
                        <div className="form__row">
                            <label htmlFor="full-name" className="form__label">Name:</label>
                            <input id="full-name" type="text" className="form__input" />
                        </div>
                        <div className="form__row">
                            <label htmlFor="user-name" className="form__label">Username:</label>
                            <input id="user-name" type="text" className="form__input" />
                        </div>
                        <div className="form__row">
                            <label htmlFor="website" className="form__label">Website:</label>
                            <input id="website" type="url" className="form__input" />
                        </div>
                        <div className="form__row">
                            <label htmlFor="bio" className="form__label">Bio:</label>
                            <textarea id="bio"></textarea>
                        </div>
                        <div className="form__row">
                            <label htmlFor="email" className="form__label">Email:</label>
                            <input id="email" type="email" className="form__input" />
                        </div>
                        <div className="form__row">
                            <label htmlFor="phone" className="form__label">Phone Number:</label>
                            <input id="phone" type="tel" className="form__input" />
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
                </div>
            </main>
        </div>
    );
}

export default EditProfileContainer;