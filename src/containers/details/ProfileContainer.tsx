import * as React from 'react';

import image_avatar from 'assets/images/avatar.jpg';
import image_feedPhoto from 'assets/images/feedPhoto.jpg';

function ProfileContainer() {
    return (
        <div>
            <main id="profile">
                <header className="profile__header">
                    <div className="profile__column"><img src={ image_avatar } alt="avatar"/></div>
                    <div className="profile__column">
                    <div className="profile__title"><h3 className="profile__username">serranoarevalo</h3><a href="edit-profile.html">Edit profile</a><i className="fa fa-cog fa-lg"></i></div>
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
                <section className="profile__photos">
                    <div className="profile__photo">
                        <img src={ image_feedPhoto } alt="feedphoto"/>
                        <div className="profile__photo-overlay">
                            <span className="overlay__item"><i className="fa fa-heart"></i>486</span>
                            <span className="overlay__item"><i className="fa fa-comment"></i>344</span>
                        </div>
                    </div>
                    <div className="profile__photo">
                        <img src={ image_feedPhoto } alt="feedphoto"/>
                        <div className="profile__photo-overlay">
                            <span className="overlay__item"><i className="fa fa-heart"></i>486</span>
                            <span className="overlay__item"><i className="fa fa-comment"></i>344</span>
                        </div>
                    </div>
                    <div className="profile__photo">
                        <img src={ image_feedPhoto } alt="feedphoto"/>
                        <div className="profile__photo-overlay">
                            <span className="overlay__item"><i className="fa fa-heart"></i>486</span>
                            <span className="overlay__item"><i className="fa fa-comment"></i>344</span>
                        </div>
                    </div>
                    <div className="profile__photo">
                        <img src={ image_feedPhoto } alt="feedphoto"/>
                        <div className="profile__photo-overlay">
                            <span className="overlay__item"><i className="fa fa-heart"></i>486</span>
                            <span className="overlay__item"><i className="fa fa-comment"></i>344</span>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default ProfileContainer;