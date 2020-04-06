import React, { useEffect } from 'react';
import { PostListResponseType } from "modules/types";
import {
    DefaultNavComponent,
    FooterComponent,

    PhotoComponent
} from 'components';

import useFeed from "hooks/useFeed";

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

    return (

        <div>
            <DefaultNavComponent/>
                <div>
                    <main id="feed">
                    {__post_list.length > 0 &&  __post_list.map((e: PostListResponseType, i: number) =>
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