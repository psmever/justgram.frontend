import * as React from 'react';

import {
    DefaultNavComponent,
    FooterComponent
} from 'components';

import {
    EditProfileContainer
} from 'containers';

function EditProfilePage() {
    return (
        <div>
            <DefaultNavComponent/>
            <EditProfileContainer/>
            <FooterComponent/>
        </div>
    );
}

export default EditProfilePage;