import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import * as Helper from 'lib/Helper';

import {
    ProfileHeader,
    ProfileColumnImage,
    ProfileColumn,
    ProfileTitle,
    ProfileUsername,
    ProfileStats,
    ProfileStat,
    ProfileStatLink,
    ProfileStatNumber,
    ProfileFullName,
    ProfileBio,
} from 'styles';


interface ProfilePageHeaderComponentProps  {
    avatar_image: string | undefined,
    username: string | undefined,
    count_info: {
        posts: number,
        followers: number,
        following: number,
    } | undefined,
    bio: string | undefined,
    web_site: string| undefined;
};

interface RouteParams {
    user_name: string
}

function ProfilePageHeaderComponent( { avatar_image, username, count_info, bio, web_site }: ProfilePageHeaderComponentProps ) {

    const params = useParams<RouteParams>();


    const followersLink = (params.user_name) ? process.env.PUBLIC_URL + `/${params.user_name}/followers` : process.env.PUBLIC_URL + `/${Helper.cookieManager.get('login_user_name')}/followers`;
    const followingLink = (params.user_name) ? process.env.PUBLIC_URL + `/${params.user_name}/following` : process.env.PUBLIC_URL + `/${Helper.cookieManager.get('login_user_name')}/following`;

    return (
        <ProfileHeader>
            { avatar_image &&
                <ProfileColumnImage><img src={ avatar_image } alt="avatar"/></ProfileColumnImage>
            }
            <ProfileColumn>
                <ProfileTitle>
                    <ProfileUsername>{ username }</ProfileUsername>
                    <Link to={process.env.PUBLIC_URL + "/profile/edit"}>Edit profile</Link>
                    <i className="fa fa-cog fa-lg"></i>
                </ProfileTitle>
                <ProfileStats>
                    <ProfileStat><ProfileStatLink to={followersLink}><ProfileStatNumber>{ count_info?.posts }</ProfileStatNumber> posts</ProfileStatLink></ProfileStat>
                    <ProfileStat><ProfileStatLink to={followersLink}><ProfileStatNumber>{ count_info?.followers }</ProfileStatNumber> followers</ProfileStatLink></ProfileStat>
                    <ProfileStat><ProfileStatLink to={followingLink}><ProfileStatNumber>{ count_info?.following }</ProfileStatNumber> following</ProfileStatLink></ProfileStat>
                </ProfileStats>
                <ProfileFullName>{ username }</ProfileFullName>
                <ProfileBio>
                    { bio }
                    <a href={web_site}>{web_site}</a>
                </ProfileBio>
            </ProfileColumn>
        </ProfileHeader>
    );
}

export default ProfilePageHeaderComponent;