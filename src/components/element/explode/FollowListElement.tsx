import React from 'react';

interface initializeProps {
    list_type: 'followers' | 'following',
    user_id: number,
    profile_image: string,
    user_name: string,
    user_profile_name: string,
    followstate: boolean,
    clickUnFollowButton: (user_id: number) => void;
    clickFollowButton: (user_id: number) => void;
}

function FollowListElement( {list_type, user_id, profile_image, user_name, user_profile_name, followstate, clickUnFollowButton, clickFollowButton } : initializeProps) {
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
                {
                    (function(){
                        switch(list_type) {
                            case "followers" :
                                if(followstate) {
                                    return <div className="explore__user-column"><button onClick={() => clickUnFollowButton(user_id)}>unFollow</button></div>
                                } else {
                                    return <div className="explore__user-column"><button onClick={() => clickFollowButton(user_id)}>Follow</button></div>
                                }
                            case "following" :
                                return <div className="explore__user-column"><button onClick={() => clickUnFollowButton(user_id)}>UnFollow</button></div>
                        }

                    })()
                }


                {
                /* {mefollowing ?
                    <div className="explore__user-column"><button onClick={() => clickUnFollowButton(user_id)}>unFollow</button></div>
                    :
                    <div className="explore__user-column"><button onClick={() => clickFollowButton(user_id)}>Follow</button></div>
                } */
                }
            </li>
        </>
    );
}

export default FollowListElement;