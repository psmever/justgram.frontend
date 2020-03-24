import * as React from 'react';

import {
    DefaultNavComponent,
    FooterComponent,

    PhotoComponent
} from 'components';

function FeedPage() {
    return (
        <div>
            <DefaultNavComponent/>
            <div>
                <main id="feed">
                    <PhotoComponent
                    />
                </main>
            </div>


            <FooterComponent/>
        </div>
    );
}

export default FeedPage;