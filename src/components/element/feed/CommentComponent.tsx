import React from 'react';
import * as commonTypes from "modules/commonTypes";
import {
    PhotoComment,
    PhotoCommentAuthor,

} from 'styles';

interface CommentProps {
    comment: commonTypes.PostListCommentType
}

function CommentComponent({ comment} : CommentProps) {
    return (
        <>
            <PhotoComment><PhotoCommentAuthor>{comment.contents}</PhotoCommentAuthor> {`<`+comment.user.user_name+`>`}</PhotoComment>
        </>
    );
}

export default CommentComponent;