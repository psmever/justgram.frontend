import * as React from 'react';

import {
    DefaultNavComponent,
    FooterComponent
} from 'components';

import {
    FeedContainer
} from 'containers';

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