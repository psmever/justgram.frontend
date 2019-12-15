import * as React from 'react';

import {
    DefaultNavComponent,
    FooterComponent
} from 'Components';

import {
    FeedContainer
} from 'Containers';

function FeedPage() {
    return (
        <div>
            <DefaultNavComponent/>
            <FeedContainer/>
            <FooterComponent/>
        </div>
    );
}

export default FeedPage;