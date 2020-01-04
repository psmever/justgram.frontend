import * as React from 'react';

import {
    DefaultNavComponent,
    FooterComponent
} from 'components';

import {
    ProfileContainer
} from 'containers';

function ProfilePage() {
    return (
        <div>
            <DefaultNavComponent/>
            <ProfileContainer/>
            <FooterComponent/>
        </div>
    );
}

export default ProfilePage;