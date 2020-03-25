import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "modules";
import { requestPostCommentAction, getPostListAction  } from "modules/posts";
import { PostsCommentRequestType } from "modules/types";


export default function useFeed() {

    const dispatch = useDispatch();

    const post_list_state = useSelector((state: RootState) => state.posts_state.post_list);
    const post_comment_request_state = useSelector((state: RootState) => state.posts_state.post_comment_request.state);
    const [ postComment, setPostComment] = useState('');

    const __post_state = post_list_state.state;
    const __post_list = post_list_state.list;

    const __handleChangeComment = (comment: string) => {
        setPostComment(comment);
    }

    const __handleSaveComment = (post_id: number) => {

        const dataObject: PostsCommentRequestType = {
            post_id : post_id,
            contents : postComment
        }
        dispatch(requestPostCommentAction(dataObject));
    }

    useEffect(() => {
        if(post_comment_request_state === 'success') {
            dispatch(getPostListAction());
        }
    }, [post_comment_request_state])

    return {
        __post_state,
        __post_list,
        __handleChangeComment,
        __handleSaveComment,
        post_comment_request_state
    }
}