import React from 'react';
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
        __post_state
    } = usePost();



    return (
        <>
            <DefaultNavComponent/>

                <main id="writer">
                    <div className="writer__column">
                        <div className="writer__box">
                            <PostFormComponent
                                tagString={tags}
                                handleSetTags={__setTags}
                                handleSetContents={__setPostContents}
                                handleSubmit={__handleSubmit}
                            />
                        </div>
                    </div>
                </main>

            <FooterComponent/>
        </>
    );
}

export default PostPage;