import React from 'react';
import * as _ from 'lodash';
import ProfileNoImage from 'assets/images/no_image.jpg';
import {
    FollowersUser,
    FollowersUserColumn,
    FollowersUserInfo,
    FollowersUserUserName,
    FollowersUserFullUserName,
    FollowersUserAvatar,
    FollowersButton,
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
            <FollowersUser>
                <FollowersUserColumn>
                    {_.isEmpty(profile_image) === false
                    ?
                        <FollowersUserAvatar src={ profile_image } alt="avatar"/>
                    :
                        <FollowersUserAvatar src={ ProfileNoImage } alt="avatar"/>
                    }

                    <FollowersUserInfo>
                        <FollowersUserUserName>{user_name}</FollowersUserUserName>
                        <FollowersUserFullUserName>{user_profile_name}</FollowersUserFullUserName>
                    </FollowersUserInfo>
                </FollowersUserColumn>
                {
                    (function(){
                        switch(list_type) {
                            case "followers" :
                                if(followstate) {
                                    return <FollowersUserColumn><FollowersButton onClick={() => clickUnFollowButton(user_id)}>unFollow</FollowersButton></FollowersUserColumn>
                                } else {
                                    return <FollowersUserColumn><FollowersButton onClick={() => clickFollowButton(user_id)}>Follow</FollowersButton></FollowersUserColumn>
                                }
                            case "following" :
                                return <FollowersUserColumn><FollowersButton onClick={() => clickUnFollowButton(user_id)}>UnFollow</FollowersButton></FollowersUserColumn>
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
            </FollowersUser>
        </>
    );
}

export default FollowListElement;