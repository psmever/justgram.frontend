import React from 'react';
import {
    MainStyle,
    MainPhoto,
    PhotoHeader,
    PhotoAvatar,
    PhotoUserInfo,
    PhotoAuthor,
    PhotoLocation,
    PhotoBox,
    PhotoImage,
    PhotoInfo,
    PhotoActions,
    PhotoAction,
    PhotoLikes,
    PhotoComments,
    PhotoComment,
    PhotoCommentAuthor,
    PhotoTimeAgo,
    PhotoAddCommentContainer,
    PhotoAddCommentTextArea,
} from 'styled/FeedMain';
import { PhotoHeartIcon, PhotoCommentIcon, PhotoAddCommentTextAreaIcon } from 'styled/StyledIcons';

export default function MainPage() {

    return (
        <React.Fragment>
            <MainStyle>

                <MainPhoto>
                    <PhotoHeader>
                        <PhotoAvatar src={process.env.PUBLIC_URL + '/assets/images/avatar.jpg'}/>
                        <PhotoUserInfo>
                            <PhotoAuthor>psmever</PhotoAuthor>
                            <PhotoLocation>JustGram</PhotoLocation>
                        </PhotoUserInfo>
                    </PhotoHeader>
                    <PhotoBox><PhotoImage src={process.env.PUBLIC_URL + '/assets/images/feedPhoto.jpg'} /></PhotoBox>
                    <PhotoInfo>
                        <PhotoActions>
                            <PhotoAction>
                                <PhotoHeartIcon size="20px"/>
                            </PhotoAction>
                            <PhotoAction>
                                <PhotoCommentIcon size="23px"/>
                            </PhotoAction>
                        </PhotoActions>
                        <PhotoLikes>45 likes</PhotoLikes>
                        <PhotoComments>
                            <PhotoComment>
                                <PhotoCommentAuthor>serranoarevalo</PhotoCommentAuthor> love this!
                            </PhotoComment>
                            <PhotoComment>
                                <PhotoCommentAuthor>serranoarevalo</PhotoCommentAuthor> love this!
                            </PhotoComment>
                            <PhotoComment>
                                <PhotoCommentAuthor>serranoarevalo</PhotoCommentAuthor> love this!
                            </PhotoComment>
                            <PhotoComment>
                                <PhotoCommentAuthor>serranoarevalo</PhotoCommentAuthor> love this!
                            </PhotoComment>
                        </PhotoComments>
                        <PhotoTimeAgo>2 hours ago</PhotoTimeAgo>
                        <PhotoAddCommentContainer>
                            <PhotoAddCommentTextArea placeholder="댓글을 등록해 주세요."></PhotoAddCommentTextArea>
                            <PhotoAddCommentTextAreaIcon size="20"/>
                        </PhotoAddCommentContainer>
                    </PhotoInfo>
                </MainPhoto>

                <MainPhoto>
                    <PhotoHeader>
                        <PhotoAvatar src={process.env.PUBLIC_URL + '/assets/images/avatar.jpg'}/>
                        <PhotoUserInfo>
                            <PhotoAuthor>psmever</PhotoAuthor>
                            <PhotoLocation>JustGram</PhotoLocation>
                        </PhotoUserInfo>
                    </PhotoHeader>
                    <PhotoBox><PhotoImage src={process.env.PUBLIC_URL + '/assets/images/feedPhoto.jpg'} /></PhotoBox>
                    <PhotoInfo>
                        <PhotoActions>
                            <PhotoAction>
                                <PhotoHeartIcon size="20px"/>
                            </PhotoAction>
                            <PhotoAction>
                                <PhotoCommentIcon size="23px"/>
                            </PhotoAction>
                        </PhotoActions>
                        <PhotoLikes>45 likes</PhotoLikes>
                        <PhotoComments>
                            <PhotoComment>
                                <PhotoCommentAuthor>serranoarevalo</PhotoCommentAuthor> love this!
                            </PhotoComment>
                            <PhotoComment>
                                <PhotoCommentAuthor>serranoarevalo</PhotoCommentAuthor> love this!
                            </PhotoComment>
                            <PhotoComment>
                                <PhotoCommentAuthor>serranoarevalo</PhotoCommentAuthor> love this!
                            </PhotoComment>
                            <PhotoComment>
                                <PhotoCommentAuthor>serranoarevalo</PhotoCommentAuthor> love this!
                            </PhotoComment>
                        </PhotoComments>
                        <PhotoTimeAgo>2 hours ago</PhotoTimeAgo>
                        <PhotoAddCommentContainer>
                            <PhotoAddCommentTextArea placeholder="댓글을 등록해 주세요."></PhotoAddCommentTextArea>
                            <PhotoAddCommentTextAreaIcon size="20"/>
                        </PhotoAddCommentContainer>
                    </PhotoInfo>
                </MainPhoto>


            </MainStyle>
        </React.Fragment>
    );
}