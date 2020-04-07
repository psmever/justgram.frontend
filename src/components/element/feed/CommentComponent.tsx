import React from 'react';
import * as commonTypes from "modules/commonTypes";

interface CommentProps {
    comment: commonTypes.PostListCommentType
}

function CommentComponent({ comment} : CommentProps) {
    return (
        <>
            <li className="photo__comment"><span className="photo__comment-author">{comment.contents}</span> {`<`+comment.user.user_name+`>`}</li>
        </>
    );
}

export default CommentComponent;