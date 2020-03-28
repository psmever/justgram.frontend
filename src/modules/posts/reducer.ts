import { PostsState } from "./types";
import { ActionType } from 'modules/models';
import createReducer from 'modules/createReducer';
import { Action, PostsStateType, APIResponseType} from 'modules/types';

const initialState: PostsState = {
    post_write: {
        state: 'yet',
        tags: [],
        postimage: {},
        contents: '',
    },
    post_list: {
        state: 'yet',
        list: []
    },
    post_comment_request: {
        state: 'yet'
    },
}

export const postsReducer = createReducer(initialState, {
    [ActionType.POST_TAG_SUCCESS](state: PostsStateType, action: Action<PostsStateType>) {
        return {
            ...state,
            post_write : {
                state: 'yet',
                tags: action.payload,
                postimage: state.post_write.postimage,
                contents: state.post_write.contents,
            }
        };
    },
    [ActionType.POST_SET_IMAGE_FINISH](state:PostsStateType, action: Action<PostsStateType>) {
        return {
            ...state,
            post_write : {
                state: 'yet',
                tags: state.post_write.tags,
                postimage: action.payload,
                contents: state.post_write.contents,
            }
        };
    },
    [ActionType.POST_SET_CONTENTS_FINISH](state:PostsStateType, action: Action<PostsStateType>) {
        return {
            ...state,
            post_write : {
                state: 'yet',
                tags: state.post_write.tags,
                postimage: state.post_write.postimage,
                contents: action.payload
            }
        };
    },
    [ActionType.POST_DATA_REQUEST](state:PostsStateType, action:Action<APIResponseType>) {
        return {
            ...state,
            post_write : {
                state: 'request',
                tags: state.post_write.tags,
                postimage: state.post_write.postimage,
                contents: state.post_write.contents
            }
        };
    },
    [ActionType.POST_DATA_SUCCESS](state:PostsStateType, action:Action<APIResponseType>) {
        return {
            ...state,
            post_write : {
                state: 'success',
                tags: [],
                postimage: [],
                contents: ''
            }
        };
    },
    [ActionType.POST_DATA_ERROR](state:PostsStateType, action:Action<APIResponseType>) {
        return {
            ...state,
            post_write : {
                state: 'failure',
                tags: state.post_write.tags,
                postimage: state.post_write.postimage,
                contents: state.post_write.contents
            }
        };
    },
    [ActionType.GET_POST_LIST_REQUEST](state:PostsStateType, action:Action<APIResponseType>) {
        return {
            ...state,
            post_list : {
                state: 'request',
                list: []
            }
        }
    },
    [ActionType.GET_POST_LIST_SUCCESS](state:PostsStateType, action:Action<APIResponseType>) {
        return {
            ...state,
            post_list : {
                state: 'success',
                list: action.payload
            }
        }
    },
    [ActionType.POST_COMMENT_DATA_REQUEST](state:PostsStateType) {
        return {
            ...state,
            post_comment_request: {
                state: 'request'
            }
        }
    },
    [ActionType.POST_COMMENT_DATA_SUCCESS](state:PostsStateType, action:Action<APIResponseType>) {
        return {
            ...state,
            post_comment_request: {
                state: 'success',
            }
        }
    },
    [ActionType.POST_COMMENT_DATA_ERROR](state:PostsStateType, action:Action<APIResponseType>) {
        return {
            ...state,
            post_comment_request : {
                state: 'failure'
            }
        }
    }

});

export default postsReducer;