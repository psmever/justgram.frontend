import { useState, useEffect, useMemo, useCallback, MouseEvent} from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "modules";
import * as _posts from "modules/posts";
import { PostsCommentRequestType } from "modules/types";
import GlobalAlert from "lib/GlobalAlert";

interface CommentValue {
    post_id : number,
    comment: string,

}

export default function useFeed() {

    const dispatch = useDispatch();

    const post_list_state = useSelector((state: RootState) => state.posts_state.post_list);
    const post_comment_request_state = useSelector((state: RootState) => state.posts_state.post_comment_request.state);

    const add_heart_request_state = useSelector((state: RootState) => state.posts_state.post_add_heart_request.state);
    const delete_heart_request_state = useSelector((state: RootState) => state.posts_state.post_delete_heart_request.state);


    const [ postComment, setPostComment] = useState<any>({data: []});

    useEffect(() => console.debug(postComment), [postComment])

    const __post_state = post_list_state.state;
    const __post_list = post_list_state.list;

    const __handleChangeComment = (comment: string, post_id: number) => {
        // setPostComment([...postComment, Object.assign({}, postComment, {post_id: post_id,comment: comment})]);

        // setPostComment(Object.assign({}, ...postComment, {post_id: post_id,comment: comment}));
        // setPostComment(Object.assign({}, postComment, {post_id: post_id,comment: comment}));

        // setPostComment(postComment.concat(post_id{ post_id: post_id,comment: comment }));
        setPostComment({
            data: [...postComment, {post_id: post_id,comment: comment}]
          });

        // console.debug();
    }

    const __handleSaveComment = (event: MouseEvent, post_id: number) => {
        console.debug(event);
        console.debug(event.target);
        // const dataObject: PostsCommentRequestType = {
        //     post_id : post_id,
        //     contents : postComment
        // }

        // console.debug(dataObject);
        // dispatch(_posts.requestPostCommentAction(dataObject));
        // window.render()

        // console.debug(postComment);
    }

    const __handleClickAddHeart = (post_id: number) => {
        dispatch(_posts.requestPostAddHeartAction({
            post_id:post_id
        }));
    }

    const __handleClickDeleteHeart = (post_id: number) => {
        dispatch(_posts.requestPostDeleteHeartAction({
            post_id:post_id
        }));
    }


    const handleHeartAddState = useMemo(() => {
        if(add_heart_request_state === 'success') return 'success'
        return 'yet'
    }, [add_heart_request_state]);

    const handleHeartDeleteState = useMemo(() => {
        if(delete_heart_request_state === 'success') return 'success'
        return 'yet'
    }, [delete_heart_request_state]);

    useEffect(() => {
        if(post_list_state.state === 'yet') {
            // dispatch(_posts.getPostListAction());
        }
    }, [])

    useEffect(() => {
        if(handleHeartAddState === "success") dispatch(_posts.getPostListAction());
        if(handleHeartAddState === "yet") return;
    }, [handleHeartAddState])

    useEffect(() => {
        if(handleHeartDeleteState === "success") dispatch(_posts.getPostListAction());
        if(handleHeartDeleteState === "yet") return;
    }, [handleHeartDeleteState])


    useEffect(() => {
        if(post_comment_request_state === "failure") {
            GlobalAlert.error({
                text: "처리중 문제가 발생했습니다. 잠시후 다시 시도해 주세요."
            });
        } else if(post_comment_request_state === "success") {
            dispatch(_posts.getPostListAction());
            GlobalAlert.default({
                text: "등록했습니다."
            });
        }
    }, [post_comment_request_state])

    useCallback(() => {
        console.log(post_list_state.list);
      }, [post_list_state.list])

    return {
        __post_state,
        __post_list,
        __handleChangeComment,
        __handleSaveComment,
        post_comment_request_state,
        __handleClickAddHeart,
        __handleClickDeleteHeart,
    }
}