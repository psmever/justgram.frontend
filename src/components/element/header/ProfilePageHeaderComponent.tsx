import React from 'react';
import { Link } from 'react-router-dom';

interface ProfilePageHeaderComponentProps  {
    avatar_image: string | null
};

function ProfilePageHeaderComponent( { avatar_image }: ProfilePageHeaderComponentProps ) {

    return (
        <header className="profile__header">
            { avatar_image &&
                <div className="profile__column"><img src={ avatar_image } alt="avatar"/></div>
            }
            <div className="profile__column">
            <div className="profile__title">
                <h3 className="profile__username">serranoarevalo</h3>
                <Link to="/profile/edit">Edit profile</Link>
                <i className="fa fa-cog fa-lg"></i>
            </div>
                <ul className="profile__stats">
                    <li className="profile__stat"><span className="stat__number">333</span> posts</li>
                    <li className="profile__stat"><span className="stat__number">1234</span> followers</li>
                    <li className="profile__stat"><span className="stat__number">36</span> following</li>
                </ul>
                <p className="profile__bio">
                    <span className="profile__full-name">NicolÃ¡s Serrano ArÃ©valo</span>
                    Doing whatever and eating Pho Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Ducimus suscipit praesentium eveniet quibusdam ipsam omnis fugit. Tempore voluptates ratione recusandae
                    natus illo perspiciatis suscipit, odio consequuntur quasi obcaecati minus! Omnis.
                    <a href={`/profile`}>serranoarevalo.com</a>
                </p>
            </div>
        </header>
    );
}

export default ProfilePageHeaderComponent;