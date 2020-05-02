import React from 'react';

import {
    ProfilePhoto,
    ProfilePhotoImage,
    ProfilePhotoOverlayItem,
    ProfilePhotoOverlay,
} from 'styles';


interface initialType {
    post_id: number;
    photo_url: string;
    comment_count: number;
    heart_count: number
};

function ProfilePostListComponent({post_id, photo_url, comment_count, heart_count}:initialType) {
    return (
        <>
            <ProfilePhoto>
                <ProfilePhotoImage src={ photo_url } alt="feedphoto"/>
                <ProfilePhotoOverlay>
                    <ProfilePhotoOverlayItem><i className="fa fa-heart"></i>{heart_count}</ProfilePhotoOverlayItem>
                    <ProfilePhotoOverlayItem><i className="fa fa-comment"></i>{comment_count}</ProfilePhotoOverlayItem>
                </ProfilePhotoOverlay>
            </ProfilePhoto>
        </>
    );
}
export default ProfilePostListComponent;