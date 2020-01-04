import * as React from 'react';

import {
    DefaultNavComponent,
    FooterComponent
} from 'components';

import {
    FeedContainer
} from 'containers';

import image_feedPhoto from 'assets/images/feedPhoto.jpg';
import image_avatar from 'assets/images/avatar.jpg';

function FeedPage() {
    return (
        <div>
            <DefaultNavComponent/>
            <div>
                <main id="feed">
                    <div className="photo">
                        <header className="photo__header">
                            <img src={image_avatar} className="photo__avatar" alt="avatar"/>
                            <div className="photo__user-info">
                                <span className="photo__author">inthetiger</span>
                                <span className="photo__location">Bestechung</span>
                            </div>
                        </header>
                        <img src={image_feedPhoto} alt="feedphoto"/>
                        <div className="photo__info">
                            <div className="photo__actions">
                                <span className="photo__action"><i className="fa fa-heart-o fa-lg"></i></span>
                                <span className="photo__action"><i className="fa fa-comment-o fa-lg"></i></span>
                            </div>
                            <span className="photo__likes">45 likes</span>
                            <ul className="photo__comments">
                                <li className="photo__comment"><span className="photo__comment-author">serranoarevalo</span> love this!</li>
                                <li className="photo__comment"><span className="photo__comment-author">serranoarevalo</span> love this!</li>
                                <li className="photo__comment"><span className="photo__comment-author">serranoarevalo</span> love this!</li>
                                <li className="photo__comment"><span className="photo__comment-author">serranoarevalo</span> love this!</li>
                            </ul>
                            <span className="photo__time-ago">2 hours ago</span>
                            <div className="photo__add-comment-container">
                                <textarea name="comment" placeholder="Add a comment..."></textarea>
                                <i className="fa fa-ellipsis-h"></i>
                            </div>
                        </div>
                    </div>
                    <div className="photo">
                        <header className="photo__header">
                            <img src={image_avatar}  className="photo__avatar" alt="avatar"/>
                            <div className="photo__user-info">
                                <span className="photo__author">inthetiger</span>
                                <span className="photo__location">Bestechung</span>
                            </div>
                        </header>
                        <img src={image_feedPhoto} alt="avatar"/>
                        <div className="photo__info">
                            <div className="photo__actions">
                                <span className="photo__action"><i className="fa fa-heart-o fa-lg"></i></span>
                                <span className="photo__action"><i className="fa fa-comment-o fa-lg"></i></span>
                            </div>
                            <span className="photo__likes">45 likes</span>
                            <ul className="photo__comments">
                                <li className="photo__comment"><span className="photo__comment-author">serranoarevalo</span> love this!</li>
                                <li className="photo__comment"><span className="photo__comment-author">serranoarevalo</span> love this!</li>
                                <li className="photo__comment"><span className="photo__comment-author">serranoarevalo</span> love this!</li>
                                <li className="photo__comment"><span className="photo__comment-author">serranoarevalo</span> love this!</li>
                            </ul>
                            <span className="photo__time-ago">2 hours ago</span>
                            <div className="photo__add-comment-container">
                                <textarea name="comment" placeholder="Add a comment..."></textarea>
                                <i className="fa fa-ellipsis-h"></i>
                            </div>
                        </div>
                    </div>
                </main>
            </div>


            <FooterComponent/>
        </div>
    );
}

export default FeedPage;