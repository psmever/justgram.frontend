import { useState, useEffect, useMemo, MouseEvent, useReducer} from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "modules";
import * as _posts from "modules/posts";
import GlobalAlert from "lib/GlobalAlert";
import * as commonTypes from "modules/commonTypes";
import * as _ from 'lodash';

function commentReducer(state:any, action:any) {
    return {
        ...state,
        [action.name] : action.post_comment
    };
}

export default function useFeed() {

    const dispatch = useDispatch();

    const post_list_state = useSelector((state: RootState) => state.posts_state.post_list);
    const post_comment_request_state = useSelector((state: RootState) => state.posts_state.post_comment_request.state);

    const add_heart_request_state = useSelector((state: RootState) => state.posts_state.post_add_heart_request.state);
    const delete_heart_request_state = useSelector((state: RootState) => state.posts_state.post_delete_heart_request.state);

    const [ heartActionState, setHeartActionState] = useState<boolean>(false);

    const __post_state = post_list_state.state;
    const __post_list = post_list_state.list;

    const [commentState, commentDispatch] = useReducer(commentReducer, {});

    const __handleChangeComment = (comment: string, post_id: number) => {
        commentDispatch({name:`post_${post_id}`, post_comment: comment});
    }


    const __handleSaveComment = (event: MouseEvent, post_id: number) => {

        if(_.isEmpty(commentState[`post_${post_id}`]) === true) {
            return;
        }

        if(commentState[`post_${post_id}`].length > 0){
            const dataObject: commonTypes.PostsCommentRequestType = {
                post_id : post_id,
                contents : commentState[`post_${post_id}`]
            }
            dispatch(_posts.requestPostCommentAction(dataObject));
        }
    }

    const __handleClickAddHeart = (post_id: number) => {
        setHeartActionState(true);
        dispatch(_posts.requestPostAddHeartAction({
            post_id:post_id
        }));
    }

    const __handleClickDeleteHeart = (post_id: number) => {
        setHeartActionState(true);
        dispatch(_posts.requestPostDeleteHeartAction({
            post_id:post_id
        }));
    }


    const handleHeartAddState = useMemo(() => {
        if(add_heart_request_state === 'success') {
            setHeartActionState(false);
            return 'success'
        }
        return 'yet'
    }, [add_heart_request_state]);

    const handleHeartDeleteState = useMemo(() => {
        if(delete_heart_request_state === 'success') {
            setHeartActionState(false);
            return 'success'
        }
        return 'yet'
    }, [delete_heart_request_state]);

    useEffect(() => {
        if(handleHeartAddState === "success") dispatch(_posts.getPostListAction());
        if(handleHeartAddState === "yet") return;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [handleHeartAddState])

    useEffect(() => {
        if(handleHeartDeleteState === "success") dispatch(_posts.getPostListAction());
        if(handleHeartDeleteState === "yet") return;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [handleHeartDeleteState])


    useEffect(() => {
        if(post_comment_request_state === "failure") {
            GlobalAlert.error({
                text: "처리중 문제가 발생했습니다. 잠시후 다시 시도해 주세요."
            });
        } else if(post_comment_request_state === "success") {
            dispatch(_posts.getPostListAction());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [post_comment_request_state])

    return {
        __post_state,
        __post_list,
        __handleChangeComment,
        __handleSaveComment,
        post_comment_request_state,
        __handleClickAddHeart,
        __handleClickDeleteHeart,
        handleHeartAddState,
        handleHeartDeleteState,
        heartActionState,
    }
}