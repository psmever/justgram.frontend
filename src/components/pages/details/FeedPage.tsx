import React from 'react';
import { FeedMainStyle } from 'styles';
import * as commonTypes from "modules/commonTypes";
import {
    DefaultNavComponent,
    FooterComponent,

    PhotoComponent
} from 'components';

import useFeed from "hooks/useFeed";

function FeedPage() {

    const {
        __post_list,
        __handleChangeComment,
        __handleSaveComment,
        __handleClickAddHeart,
        __handleClickDeleteHeart,
        heartActionState,
        post_comment_request_state
    } = useFeed();

    return (
        <>
            <DefaultNavComponent/>
                    <FeedMainStyle>
                        {__post_list.length > 0 &&  __post_list.map((e: commonTypes.PostListResponseType, i: number) =>
                            <PhotoComponent
                                key={i}
                                feeds={e}
                                handleChangeComment={__handleChangeComment}
                                handleSaveComment={__handleSaveComment}
                                handleClickAddHeart={__handleClickAddHeart}
                                handleClickDeleteHeart={__handleClickDeleteHeart}
                                heartactionstate={heartActionState}
                                saveCommentState={post_comment_request_state}
                            />
                            )
                        }
                    </FeedMainStyle>
            <FooterComponent/>
        </>
    );
}

export default FeedPage;