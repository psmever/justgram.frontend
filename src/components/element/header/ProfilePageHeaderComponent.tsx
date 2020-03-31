import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import * as Helper from 'lib/Helper';

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


    const followersLink = (params.user_name) ? `/${params.user_name}/followers` : `/${Helper.getCookie('login_user_name')}/followers`;
    const followingLink = (params.user_name) ? `/${params.user_name}/following` : `/${Helper.getCookie('login_user_name')}/following`;

    return (
        <header className="profile__header">
            { avatar_image &&
                <div className="profile__column"><img src={ avatar_image } alt="avatar"/></div>
            }
            <div className="profile__column">
            <div className="profile__title">
            <h3 className="profile__username">{ username }</h3>
                <Link to="/profile/edit">Edit profile</Link>
                <i className="fa fa-cog fa-lg"></i>
            </div>
                <ul className="profile__stats">
                    <li className="profile__stat"><span className="stat__number">{ count_info?.posts }</span> posts</li>
                    <Link to={followersLink}><li className="profile__stat"><span className="stat__number">{ count_info?.followers }</span> followers</li></Link>
                    <Link to={followingLink}><li className="profile__stat"><span className="stat__number">{ count_info?.following }</span> following</li></Link>
                </ul>
                <span className="profile__full-name">{ username }</span>
                <p className="profile__bio">
                    { bio }
                    <a href={`/profile`}>{web_site}</a>
                </p>
            </div>
        </header>
    );
}

export default ProfilePageHeaderComponent;