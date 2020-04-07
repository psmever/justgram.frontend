import { FormEvent, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPostTagsAction, setPostImageAction, setPostContentsAction, postRequestAction } from 'modules/posts';
import { RootState } from 'modules';
import * as _posts from "modules/posts";
import { PostRequestType } from 'modules/types';
import GlobalAlert from 'lib/GlobalAlert';

export default function usePost() {


    const _pageLifeState = useRef(0);

    const dispatch = useDispatch();
    const posts_state = useSelector((state: RootState) => state.posts_state);

    const tags = posts_state.post_write.tags;
    const __post_state = posts_state.post_write.state;

    const __setTags = (tag: any) => {
        dispatch(setPostTagsAction(tag));
    }

    const __setPostImage = (image: any) => {
        dispatch(setPostImageAction(image));
    }

    const __setPostContents = (contents: string) => {
        dispatch(setPostContentsAction(contents));
    }

    const __handleSubmit = async ( event: FormEvent<HTMLFormElement> ) => {
        event.preventDefault();

        const dataObject: PostRequestType = {
            'upload_image': JSON.stringify(posts_state.post_write.postimage),
            'tags': JSON.stringify(posts_state.post_write.tags),
            'contents': posts_state.post_write.contents,
        };

        dispatch(postRequestAction(dataObject));
    }

    useEffect(() =>  {
        if(__post_state === "failure") {
            GlobalAlert.error({
                text: "처리중 문제가 발생했습니다. 잠시후 다시 시도해 주세요."
            });
        } else if(__post_state === "success") {

            _pageLifeState.current = 1;
            dispatch(_posts.getPostListAction());

            GlobalAlert.thenHistoryPush({
                text: "정상 처리 하였습니다.",
                push_router: '/feed'
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [__post_state])

    return {
        tags,
        __setTags,
        __setPostImage,
        __setPostContents,
        __handleSubmit,
        __post_state
    };
}