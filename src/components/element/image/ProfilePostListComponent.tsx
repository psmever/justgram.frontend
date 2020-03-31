import React from 'react';

interface initialType {
    post_id: number;
    photo_url: string;
    comment_count: number;
    heart_count: number
};

function ProfilePostListComponent({post_id, photo_url, comment_count, heart_count}:initialType) {
    return (
        <>
            <div className="profile__photo">
                <img src={ photo_url } alt="feedphoto"/>
                <div className="profile__photo-overlay">
                    <span className="overlay__item"><i className="fa fa-heart"></i>{heart_count}</span>
                    <span className="overlay__item"><i className="fa fa-comment"></i>{comment_count}</span>
                </div>
            </div>
        </>
    );
}
export default ProfilePostListComponent;