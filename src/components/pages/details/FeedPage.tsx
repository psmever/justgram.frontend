import React, { useEffect } from 'react';

import {
    DefaultNavComponent,
    FooterComponent,

    PhotoComponent
} from 'components';

import useFeed from "hooks/useFeed";
import GlobalAlert from "lib/GlobalAlert";

function FeedPage() {

    const {
        __post_state,
        __post_list,
        __handleChangeComment,
        __handleSaveComment,
        post_comment_request_state,
        __handleClickAddHeart,
        __handleClickDeleteHeart,
    } = useFeed();

    useEffect(() => {
        if(post_comment_request_state === "failure") {
            GlobalAlert.error({
                text: "처리중 문제가 발생했습니다. 잠시후 다시 시도해 주세요."
            });
        } else if(post_comment_request_state === "success") {
            // GlobalAlert.thenHistoryPush({
            //     text: "정상 처리 하였습니다.",
            //     push_router: '/feed'
            // });
        }
    }, [post_comment_request_state])

    return (

        <div>
            <DefaultNavComponent/>
                <div>
                    <main id="feed">
                    {__post_state === "success" &&  __post_list.map((e: any, i: number) =>
                        <PhotoComponent
                            key={i}
                            feeds={e}
                            handleChangeComment={__handleChangeComment}
                            handleSaveComment={__handleSaveComment}
                            handleClickAddHeart={__handleClickAddHeart}
                            handleClickDeleteHeart={__handleClickDeleteHeart}
                        />
                        )
                    }
                    </main>
                </div>
            <FooterComponent/>
        </div>
    );
}

export default FeedPage;