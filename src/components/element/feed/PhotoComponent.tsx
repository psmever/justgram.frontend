import React, {MouseEvent} from 'react';
import {
    PhotoStyle,
    PhotoHeaderStyle,
    PhotoHeaderAvatarStyle,
    PhotouserInfoStyle,
    PhotouserInfoAuthorStyle,
    PhotouserInfoLocationSttyle,
    PhotoFeedPhotoStyle,
    PhotoFeedPhotoimgStyle,
    PhotoInfoStyle,
    PhotoActionsStyle,
    PhotoActionStyle,
    PhotoLikes,
    PhotoComments,
    PhotoTimeAgo,
    PhotoAddCommentContainer,
    PhotoAddCommentContainerTextArea,
    PhotoAddCommentContainerTextAreaI,
} from 'styles';
import { CommentComponent } from "components";
import * as commonTypes from "modules/commonTypes";
import { Link } from 'react-router-dom';

import {LoadingPage} from "components";

interface PhotoProps {
    feeds: commonTypes.PostListResponseType
    handleChangeComment: ( comment_string: string, post_id: number ) => void;
    handleSaveComment: ( e: MouseEvent, post_id: number) => void;
    saveCommentState: commonTypes.SagaStatus;
    handleClickAddHeart: ( post_id: number) => void;
    handleClickDeleteHeart: ( post_id: number) => void;
    heartactionstate: boolean;
}

function PhotoComponent({ feeds, handleChangeComment, handleSaveComment, handleClickAddHeart, handleClickDeleteHeart, heartactionstate, saveCommentState } : PhotoProps) {
    return (
        <>
            <PhotoStyle>
                <PhotoHeaderStyle>
                    <Link to={process.env.PUBLIC_URL + `/${feeds.user_info.user_name}/profile`}><PhotoHeaderAvatarStyle src={feeds.user_info.user_profile_image} alt="avatar"/></Link>
                    <PhotouserInfoStyle>
                        <Link to={process.env.PUBLIC_URL + `/${feeds.user_info.user_name}/profile`}><PhotouserInfoAuthorStyle>{feeds.user_info.user_name}</PhotouserInfoAuthorStyle></Link>
                        <Link to={process.env.PUBLIC_URL + `/${feeds.user_info.user_name}/profile`}><PhotouserInfoLocationSttyle>{feeds.user_info.user_email}</PhotouserInfoLocationSttyle></Link>
                    </PhotouserInfoStyle>
                </PhotoHeaderStyle>
                <PhotoFeedPhotoStyle><PhotoFeedPhotoimgStyle src={feeds.image.cloudinary.secure_url} alt="feedphoto"/></PhotoFeedPhotoStyle>
                <PhotoInfoStyle>
                    <PhotoActionsStyle>
                        {
                            (function(){
                                if(heartactionstate) {
                                    return <PhotoActionStyle><LoadingPage type={'Circles'} color={'#00BFFF'} height={15} width={15} /></PhotoActionStyle>
                                } else {
                                    if(feeds.myheart) {
                                        return <PhotoActionStyle><i className="fa fa-heart fa-lg" onClick={() => handleClickDeleteHeart(feeds.post_id)}></i></PhotoActionStyle>
                                    } else {
                                        return <PhotoActionStyle><i className="fa fa-heart-o fa-lg" onClick={() => handleClickAddHeart(feeds.post_id)}></i></PhotoActionStyle>
                                    }
                                }
                            })()
                        }
                        <PhotoActionStyle><i className="fa fa-comment-o fa-lg"></i></PhotoActionStyle>
                    </PhotoActionsStyle>
                    <PhotoLikes>{feeds.tags.string}</PhotoLikes>
                    <PhotoLikes>{feeds.hearts_count} hearts</PhotoLikes>
                    <PhotoLikes>{feeds.contents.split('\n').map( (it, i) => <div key={'x'+i}>{it}</div> )}</PhotoLikes>
                    <PhotoComments>
                        {feeds.comments && feeds.comments.map((comment: commonTypes.PostListCommentType, i:number) =>
                            <CommentComponent
                                key={i}
                                comment={comment}
                            />
                            )
                        }
                    </PhotoComments>
                    <PhotoTimeAgo>{feeds.post_datetime.create_time_string}</PhotoTimeAgo>
                    <PhotoAddCommentContainer>
                        {saveCommentState === 'loading'
                            ? <PhotoTimeAgo><LoadingPage type={'Circles'} color={'#00BFFF'} height={15} width={15} /></PhotoTimeAgo>
                            :<><PhotoAddCommentContainerTextArea name={`post_`+feeds.post_id} placeholder="댓글을 입력해 주세요." onChange={ e => handleChangeComment(e.target.value, feeds.post_id)}></PhotoAddCommentContainerTextArea><PhotoAddCommentContainerTextAreaI className="fa fa-ellipsis-h" onClick={(e) => handleSaveComment(e, feeds.post_id)}></PhotoAddCommentContainerTextAreaI></>
                        }
                    </PhotoAddCommentContainer>
                </PhotoInfoStyle>
            </PhotoStyle>
        </>
    );
}

export default PhotoComponent;