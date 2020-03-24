import { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPostTagsAction, setPostImageAction, setPostContentsAction, postRequestAction } from 'modules/posts';
import { RootState } from 'modules';
import { PostRequestType } from 'modules/types';

export default function usePost() {
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

    return {
        tags,
        __setTags,
        __setPostImage,
        __setPostContents,
        __handleSubmit,
        __post_state
    };
}