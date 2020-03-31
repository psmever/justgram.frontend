import React from 'react';

interface ExplodeListElementProps {
    user_id: number,
    profile_image: string,
    user_name: string,
    user_profile_name: string,
    mefollowing: boolean,
    clickUnFollowButton: (user_id: number) => void;
    clickFollowButton: (user_id: number) => void;
}

function ExplodeListElement( {user_id, profile_image, user_name, user_profile_name, mefollowing, clickUnFollowButton, clickFollowButton } : ExplodeListElementProps) {
    return (
        <>
            <li className="explore__user">
                <div className="explore__user-column">
                    <img src={ profile_image } className="explore__avatar" alt="avatar"/>
                    <div className="explore__info">
                        <span className="explore__username">{user_name}</span>
                        <span className="explore__full-name">{user_profile_name}</span>
                    </div>
                </div>
                {mefollowing?
                    <div className="explore__user-column"><button onClick={() => clickUnFollowButton(user_id)}>UnFollow</button></div>
                    :
                    <div className="explore__user-column"><button onClick={() => clickFollowButton(user_id)}>Follow</button></div>
                }
            </li>
        </>
    );
}

export default ExplodeListElement;