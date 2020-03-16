import React, {useState} from 'react';

import {
    DefaultNavComponent,
    FooterComponent,
    PostFormComponent
} from 'components';

function PostPage() {

    const [tags, setTags] = useState([""]);

    const _handleSetTags = (tag: any) => {
        console.debug(tag);

        setTags(tag);
    }

    return (
        <>
            <DefaultNavComponent/>

            <main id="writer">
                <div className="writer__column">
                    <div className="writer__box">
                        <PostFormComponent
                            tagString={tags}
                            handleSetTags={_handleSetTags}
                        />
                    </div>
                </div>
            </main>

            <FooterComponent/>
        </>
    );
}

export default PostPage;