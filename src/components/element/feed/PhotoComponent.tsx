import React, {MouseEvent} from 'react';
import { CommentComponent } from "components";
import * as commonTypes from "modules/commonTypes";

interface PhotoProps {
    feeds: commonTypes.PostListResponseType
    handleChangeComment: ( comment_string: string, post_id: number ) => void;
    handleSaveComment: ( e: MouseEvent, post_id: number) => void;
    handleClickAddHeart: ( post_id: number) => void;
    handleClickDeleteHeart: ( post_id: number) => void;
}

function PhotoComponent({ feeds, handleChangeComment, handleSaveComment, handleClickAddHeart, handleClickDeleteHeart } : PhotoProps) {

    return (
        <>
            <div className="photo">
                <header className="photo__header">
                    <img src={feeds.user_info.user_profile_image} className="photo__avatar" alt="avatar"/>
                    <div className="photo__user-info">
                        <span className="photo__author">{feeds.user_info.user_name}</span>
                        <span className="photo__location">{feeds.user_info.user_email}</span>
                    </div>
                </header>
                <div className="photo_feedphoto"><img src={feeds.image.cloudinary.secure_url} alt="feedphoto"/></div>
                <div className="photo__info">
                    <div className="photo__actions">
                        {
                            (function(){
                                if(feeds.myheart) {
                                    return <span className="photo__action"><i className="fa fa-heart fa-lg" onClick={() => handleClickDeleteHeart(feeds.post_id)}></i></span>
                                } else {
                                    return <span className="photo__action"><i className="fa fa-heart-o fa-lg" onClick={() => handleClickAddHeart(feeds.post_id)}></i></span>
                                }
                            })()
                        }
                        <span className="photo__action"><i className="fa fa-comment-o fa-lg"></i></span>
                    </div>
                    <span className="photo__likes">{feeds.tags.string}</span>
                    <span className="photo__likes">{feeds.hearts_count} hearts</span>
                    <span className="photo__likes">{feeds.contents.split('\n').map( (it, i) => <div key={'x'+i}>{it}</div> )}</span>
                    <ul className="photo__comments">
                        {feeds.comments && feeds.comments.map((comment: commonTypes.PostListCommentType, i:number) =>
                            <CommentComponent
                                key={i}
                                comment={comment}
                            />
                            )
                        }
                    </ul>
                    <span className="photo__time-ago">{feeds.post_datetime.create_time_string}</span>
                    <div className="photo__add-comment-container">
                        <textarea name="comment" id={`post_`+feeds.post_id} placeholder="댓글을 입력해 주세요." onChange={ e => handleChangeComment(e.target.value, feeds.post_id)}></textarea>
                        <i className="fa fa-ellipsis-h" onClick={(e) => handleSaveComment(e, feeds.post_id)}></i>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PhotoComponent;