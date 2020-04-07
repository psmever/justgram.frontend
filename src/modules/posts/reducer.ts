import { PostsState } from "./types";
import { ActionType } from 'modules/models';
import createReducer from 'modules/createReducer';
import * as commonTypes from 'modules/commonTypes';

const initialState: PostsState = {
    post_write: {
        state: 'idle',
        tags: [],
        postimage: {},
        contents: '',
    },
    post_list: {
        state: 'idle',
        list: []
    },
    post_comment_request: {
        state: 'idle'
    },
    post_add_heart_request: {
        state: 'idle'
    },
    post_delete_heart_request: {
        state: 'idle'
    },
}

export const postsReducer = createReducer(initialState, {
    [ActionType.POST_TAG_SUCCESS](state: commonTypes.PostsStateType, action: commonTypes.Action<commonTypes.PostsStateType>) {
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
    [ActionType.POST_SET_IMAGE_FINISH](state:commonTypes.PostsStateType, action: commonTypes.Action<commonTypes.PostsStateType>) {
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
    [ActionType.POST_SET_CONTENTS_FINISH](state:commonTypes.PostsStateType, action: commonTypes.Action<commonTypes.PostsStateType>) {
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
    [ActionType.POST_DATA_REQUEST](state:commonTypes.PostsStateType, action:commonTypes.Action<commonTypes.APIResponseType>) {
        return {
            ...state,
            post_write : {
                state: 'loading',
                tags: state.post_write.tags,
                postimage: state.post_write.postimage,
                contents: state.post_write.contents
            }
        };
    },
    [ActionType.POST_DATA_SUCCESS](state:commonTypes.PostsStateType, action:commonTypes.Action<commonTypes.APIResponseType>) {
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
    [ActionType.POST_DATA_ERROR](state:commonTypes.PostsStateType, action:commonTypes.Action<commonTypes.APIResponseType>) {
        return {
            ...state,
            post_write : {
                state: 'failure',
                tags: [],
                postimage: [],
                contents: ''
            }
        };
    },
    [ActionType.POST_DATA_RESET](state:commonTypes.PostsStateType) {
        return {
            ...state,
            post_write : {
                state: 'idle',
                tags: [],
                postimage: [],
                contents: ''
            }
        };
    },
    [ActionType.GET_POST_LIST_REQUEST](state:commonTypes.PostsStateType, action:commonTypes.Action<commonTypes.APIResponseType>) {
        return {
            ...state,
            post_list : Object.assign({}, state.post_list, {
                state: 'loading',
            })
        }
    },
    [ActionType.GET_POST_LIST_SUCCESS](state:commonTypes.PostsStateType, action:commonTypes.Action<commonTypes.APIResponseType>) {
        return {
            ...state,
            post_list : Object.assign({}, state.post_list, {
                    state: 'success',
                    list: action.payload
            })
        }
    },
    [ActionType.POST_COMMENT_DATA_REQUEST](state:commonTypes.PostsStateType) {
        return {
            ...state,
            post_comment_request: {
                state: 'loading'
            }
        }
    },
    [ActionType.POST_COMMENT_DATA_SUCCESS](state:commonTypes.PostsStateType, action:commonTypes.Action<commonTypes.APIResponseType>) {
        return {
            ...state,
            post_comment_request: {
                state: 'success',
            }
        }
    },
    [ActionType.POST_COMMENT_DATA_ERROR](state:commonTypes.PostsStateType, action:commonTypes.Action<commonTypes.APIResponseType>) {
        return {
            ...state,
            post_comment_request : {
                state: 'failure'
            }
        }
    },
    [ActionType.POST_HEART_ADD_REQUEST](state:commonTypes.PostsStateType) {
        return {
            ...state,
            post_add_heart_request: {
                state: 'loading'
            }
        }
    },
    [ActionType.POST_HEART_ADD_SUCCESS](state:commonTypes.PostsStateType, action:commonTypes.Action<commonTypes.APIResponseType>) {
        return {
            ...state,
            post_add_heart_request: {
                state: 'success',
            }
        }
    },
    [ActionType.POST_HEART_ADD_ERROR](state:commonTypes.PostsStateType, action:commonTypes.Action<commonTypes.APIResponseType>) {
        return {
            ...state,
            post_add_heart_request : {
                state: 'failure'
            }
        }
    },
    [ActionType.POST_HEART_DELETE_REQUEST](state:commonTypes.PostsStateType) {
        return {
            ...state,
            post_delete_heart_request: {
                state: 'loading'
            }
        }
    },
    [ActionType.POST_HEART_DELETE_SUCCESS](state:commonTypes.PostsStateType, action:commonTypes.Action<commonTypes.APIResponseType>) {
        return {
            ...state,
            post_delete_heart_request: {
                state: 'success',
            }
        }
    },
    [ActionType.POST_HEART_DELETE_ERROR](state:commonTypes.PostsStateType, action:commonTypes.Action<commonTypes.APIResponseType>) {
        return {
            ...state,
            post_delete_heart_request : {
                state: 'failure'
            }
        }
    }

});

export default postsReducer;