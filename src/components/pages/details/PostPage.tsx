import React from 'react';
import {
    PostMain,
    PostColumn,
    PostBox,
} from 'styles';
import {
    DefaultNavComponent,
    FooterComponent,
    PostFormComponent
} from 'components';

import usePost from "hooks/usePost";

function PostPage() {

    const {
        tags,
        __setTags,
        __setPostContents,
        __handleSubmit,
        checkPostInputData,
        __post_state
    } = usePost();

    return (
        <>
            <DefaultNavComponent/>

                <PostMain>
                    <PostColumn>
                        <PostBox>
                            <PostFormComponent
                                tagString={tags}
                                handleSetTags={__setTags}
                                handleSetContents={__setPostContents}
                                handleSubmit={__handleSubmit}
                                checkPostInputData={checkPostInputData}
                                post_state={__post_state}
                            />
                        </PostBox>
                    </PostColumn>
                </PostMain>

            <FooterComponent/>
        </>
    );
}

export default PostPage;