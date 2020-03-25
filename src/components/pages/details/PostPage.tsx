import React, { useEffect } from 'react';
import GlobalAlert  from 'lib/GlobalAlert';
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


    useEffect(() =>  {
        console.debug(__post_state);

        if(__post_state === "failure") {
            GlobalAlert.error({
                text: "처리중 문제가 발생했습니다. 잠시후 다시 시도해 주세요."
            });
        } else if(__post_state === "success") {
            GlobalAlert.thenHistoryPush({
                text: "정상 처리 하였습니다.",
                push_router: '/feed'
            });
        }
    }, [__post_state])

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