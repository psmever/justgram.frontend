import { FormEvent, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPostTagsAction, setPostImageAction, setPostContentsAction, postRequestAction } from 'modules/posts';
import { RootState } from 'modules';
import * as _posts from "modules/posts";
import * as commonTypes from 'modules/commonTypes';
import GlobalAlert from 'lib/GlobalAlert';
import * as _ from 'lodash';
import History from 'routes/History';

export default function usePost() {


    const _pageLifeState = useRef(0);

    const dispatch = useDispatch();
    const posts_state = useSelector((state: RootState) => state.posts_state);

    const tags = posts_state.post_write.tags;
    const __post_state = posts_state.post_write.state;
    const [checkPostInputData, setCheckPostInputData] = useState({
        state: true,
        message: '테스트.',
    });

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

        if(_.isEmpty(posts_state.post_write.postimage) === true) {
            setCheckPostInputData({
                state: false,
                message: '등록할 이미지를 선택해 주세요.'
            });
            return;
        }

        if(_.isEmpty(posts_state.post_write.contents)) {
            setCheckPostInputData({
                state: false,
                message: '글을 입력해 주세요..'
            });
            return;
        }

        const upload_image = JSON.stringify(posts_state.post_write.postimage);
        const tags = JSON.stringify(posts_state.post_write.tags);
        const contents = posts_state.post_write.contents;

        const dataObject: commonTypes.PostRequestType = {
            'upload_image': upload_image,
            'tags': tags,
            'contents': contents,
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
            dispatch(_posts.postRequestResetAction());
            dispatch(_posts.getPostListAction());

            History.push(process.env.PUBLIC_URL + '/feed');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [__post_state])

    useEffect(() => {
        if(checkPostInputData.state === false) {
            setTimeout(() => {
                setCheckPostInputData({
                    state: true,
                    message: ''
                });
            }, 1000);
        }
    }, [checkPostInputData]);

    return {
        tags,
        __setTags,
        __setPostImage,
        __setPostContents,
        __handleSubmit,
        __post_state,
        checkPostInputData
    };
}