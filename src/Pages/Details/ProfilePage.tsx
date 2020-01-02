import * as React from 'react';

import {
    DefaultNavComponent,
    FooterComponent
} from 'Components';

import {
    ProfileContainer
} from 'Containers';

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