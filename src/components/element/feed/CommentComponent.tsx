import React from 'react';
import { PostListCommentType } from "modules/types";

interface CommentProps {
    comment: PostListCommentType
}

function CommentComponent({ comment} : CommentProps) {
    return (
        <>
            <li className="photo__comment"><span className="photo__comment-author">{comment.contents}</span> {`<`+comment.user.user_name+`>`}</li>
        </>
    );
}

export default CommentComponent;