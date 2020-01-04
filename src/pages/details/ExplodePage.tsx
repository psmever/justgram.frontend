import * as React from 'react';

import {
    DefaultNavComponent,
    FooterComponent
} from 'components';

import {
    ExploreContainer
} from 'containers';

function ExplodePage() {
    return (
        <div>
            <DefaultNavComponent/>
            <ExploreContainer/>
            <FooterComponent/>
        </div>
    );
}

export default ExplodePage;