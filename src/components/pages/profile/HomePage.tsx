import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    ProfileStyle,
    ProfileHeader,
    ProfileColumn,
    ProfileTitle,
    ProfileUserName,
    ProfileEditLink,
    ProfileStats,
    ProfileStat,
    ProfileStatNumber,
    ProfileBio,
    ProfileUserFullName,
    ProfileBioLink,
    ProfilePhotos,
    ProfilePhoto,
    ProfilePhotoImage,
    ProfilePhotoOverlay,
    ProfilePhotoOverlayItem,
} from 'styled/ProfileHome';
import { ProfileSettingIcon, ProfilePhotoOverlayItemHeartIcon, ProfilePhotoOverlayItemCommentIcon } from 'styled/StyledIcons';


export default function HomePage() {

    const history = useHistory();

    const handleClickProfileEditList = (e: any) => {
        e.preventDefault();
        history.push({
            pathname: process.env.PUBLIC_URL + `/profile/psmever/edit`
        });
    }

    return (
        <React.Fragment>
            <ProfileStyle>
                <ProfileHeader>
                    <ProfileColumn>
                        <img src={process.env.PUBLIC_URL + '/assets/images/avatar.jpg'} alt=""/>
                    </ProfileColumn>
                    <ProfileColumn>
                        <ProfileTitle>
                            <ProfileUserName>psmever</ProfileUserName>
                            <ProfileEditLink to="" onClick={(e) => handleClickProfileEditList(e)}>Edit profile</ProfileEditLink>
                            <ProfileSettingIcon size="18px"/>
                        </ProfileTitle>
                        <ProfileStats>
                            <ProfileStat>
                                게시물 <ProfileStatNumber>333</ProfileStatNumber>
                            </ProfileStat>
                            <ProfileStat>
                                팔로워 <ProfileStatNumber>1234</ProfileStatNumber>
                            </ProfileStat>
                            <ProfileStat>
                                팔로우 <ProfileStatNumber>36</ProfileStatNumber>
                            </ProfileStat>
                        </ProfileStats>
                        <ProfileBio>
                            <ProfileUserFullName>
                                just gram
                            </ProfileUserFullName>

        당신은 무엇을 가지고 다니십니까<br/>
        <br/>
        사랑을 가지고 가는 자는<br/>
        가는 곳곳마다 친구가 있고<br/>
        <br/>
        선을 가지고 가는 자는<br/>
        가는 곳곳마다 외롭지 않고<br/>
        <br/>
        정의를 가지고 가는 자는<br/>
        가는 곳곳마다 함께 하는 자가 있고<br/>
        <br/>
        진리를 가지고 가는 자는<br/>
        가는 곳곳마다 듣는 사람이 있이다<br/>
        <br/>

                            <ProfileBioLink to="" onClick={(e) => e.preventDefault()}>justgram.nicepage.pe.kr</ProfileBioLink>
                        </ProfileBio>
                    </ProfileColumn>
                </ProfileHeader>
                <ProfilePhotos>
                    <ProfilePhoto>
                        <ProfilePhotoImage src={process.env.PUBLIC_URL + '/assets/images/feedPhoto.jpg'} alt="" />
                        <ProfilePhotoOverlay>
                            <ProfilePhotoOverlayItem>
                                <ProfilePhotoOverlayItemHeartIcon size="20px"/>
                                486
                            </ProfilePhotoOverlayItem>
                            <ProfilePhotoOverlayItem>
                                <ProfilePhotoOverlayItemCommentIcon size="20px"/>
                                344
                            </ProfilePhotoOverlayItem>
                        </ProfilePhotoOverlay>
                    </ProfilePhoto>


                    <ProfilePhoto>
                        <ProfilePhotoImage src={process.env.PUBLIC_URL + '/assets/images/feedPhoto.jpg'} alt="" />
                        <ProfilePhotoOverlay>
                            <ProfilePhotoOverlayItem>
                                <ProfilePhotoOverlayItemHeartIcon size="20px"/>
                                486
                            </ProfilePhotoOverlayItem>
                            <ProfilePhotoOverlayItem>
                                <ProfilePhotoOverlayItemCommentIcon size="20px"/>
                                344
                            </ProfilePhotoOverlayItem>
                        </ProfilePhotoOverlay>
                    </ProfilePhoto>


                    <ProfilePhoto>
                        <ProfilePhotoImage src={process.env.PUBLIC_URL + '/assets/images/feedPhoto.jpg'} alt="" />
                        <ProfilePhotoOverlay>
                            <ProfilePhotoOverlayItem>
                                <ProfilePhotoOverlayItemHeartIcon size="20px"/>
                                486
                            </ProfilePhotoOverlayItem>
                            <ProfilePhotoOverlayItem>
                                <ProfilePhotoOverlayItemCommentIcon size="20px"/>
                                344
                            </ProfilePhotoOverlayItem>
                        </ProfilePhotoOverlay>
                    </ProfilePhoto>


                    <ProfilePhoto>
                        <ProfilePhotoImage src={process.env.PUBLIC_URL + '/assets/images/feedPhoto.jpg'} alt="" />
                        <ProfilePhotoOverlay>
                            <ProfilePhotoOverlayItem>
                                <ProfilePhotoOverlayItemHeartIcon size="20px"/>
                                486
                            </ProfilePhotoOverlayItem>
                            <ProfilePhotoOverlayItem>
                                <ProfilePhotoOverlayItemCommentIcon size="20px"/>
                                344
                            </ProfilePhotoOverlayItem>
                        </ProfilePhotoOverlay>
                    </ProfilePhoto>



                    <ProfilePhoto>
                        <ProfilePhotoImage src={process.env.PUBLIC_URL + '/assets/images/feedPhoto.jpg'} alt="" />
                        <ProfilePhotoOverlay>
                            <ProfilePhotoOverlayItem>
                                <ProfilePhotoOverlayItemHeartIcon size="20px"/>
                                486
                            </ProfilePhotoOverlayItem>
                            <ProfilePhotoOverlayItem>
                                <ProfilePhotoOverlayItemCommentIcon size="20px"/>
                                344
                            </ProfilePhotoOverlayItem>
                        </ProfilePhotoOverlay>
                    </ProfilePhoto>





                </ProfilePhotos>
            </ProfileStyle>
        </React.Fragment>
    );
}