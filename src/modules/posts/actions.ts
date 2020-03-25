import { ActionType } from 'modules/models';
import {CloudinaryResponseSubDataInfoType, PostsCommentRequestType} from 'modules/types';

export const setPostTagsAction = (payload: string) => {
    return {
        type:ActionType.POST_TAG_SET,
        payload
    };
}

export const setPostImageAction = (payload: CloudinaryResponseSubDataInfoType) => {
    return {
        type:ActionType.POST_SET_IMAGE_START,
        payload
    };
}

export const setPostContentsAction = (payload: string) => {
    return {
        type:ActionType.POST_SET_CONTENTS_REACTION,
        payload
    };
}

export const postRequestAction = (payload: any) => {
    return {
        type:ActionType.POST_DATA_REQUEST,
        payload
    };
}

export const getPostListAction = () => {
    return {
        type: ActionType.GET_POST_LIST_REQUEST
    }
}

export const requestPostCommentAction = (payload: PostsCommentRequestType) => {
    return {
        type: ActionType.POST_COMMENT_DATA_REQUEST,
        payload
    }
}