import * as React from 'react';

import {
    DefaultNavComponent,
    FooterComponent
} from 'Components';

import {
    EditProfileContainer
} from 'Containers';

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