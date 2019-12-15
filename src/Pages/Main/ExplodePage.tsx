import * as React from 'react';

import {
    DefaultNavComponent,
    FooterComponent
} from 'Components';

import {
    ExploreContainer
} from 'Containers';

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