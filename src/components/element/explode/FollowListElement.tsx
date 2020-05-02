import React from 'react';
import * as _ from 'lodash';
import ProfileNoImage from 'assets/images/no_image.jpg';
import {
    FollowUser,
    FollowUserColumn,
    FollowUserInfo,
    FollowUserUserName,
    FollowUserFullUserName,
    FollowUserAvatar,
    FollowButton,
} from 'styles';

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
            <FollowUser>
                <FollowUserColumn>
                    {_.isEmpty(profile_image) === false
                    ?
                        <FollowUserAvatar src={ profile_image } alt="avatar"/>
                    :
                        <FollowUserAvatar src={ ProfileNoImage } alt="avatar"/>
                    }

                    <FollowUserInfo>
                        <FollowUserUserName>{user_name}</FollowUserUserName>
                        <FollowUserFullUserName>{user_profile_name}</FollowUserFullUserName>
                    </FollowUserInfo>
                </FollowUserColumn>
                {
                    (function(){
                        switch(list_type) {
                            case "followers" :
                                if(followstate) {
                                    return <FollowUserColumn><FollowButton onClick={() => clickUnFollowButton(user_id)}>unFollow</FollowButton></FollowUserColumn>
                                } else {
                                    return <FollowUserColumn><FollowButton onClick={() => clickFollowButton(user_id)}>Follow</FollowButton></FollowUserColumn>
                                }
                            case "following" :
                                return <FollowUserColumn><FollowButton onClick={() => clickUnFollowButton(user_id)}>UnFollow</FollowButton></FollowUserColumn>
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
            </FollowUser>
        </>
    );
}

export default FollowListElement;