import React, {Fragment} from 'react';
import {
    Rootcontainer
} from 'resources/containers';
import {
    TestComponent
} from 'resources/components';

function TestPage() {

    return (
        <Fragment>
            <div>
                Test Page
            </div>

            <div>
                <Rootcontainer>
                    <TestComponent/>
                </Rootcontainer>
            </div>
        </Fragment>
    );
}

export default TestPage;