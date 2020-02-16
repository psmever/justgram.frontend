import React, {Fragment} from 'react';
import {
    Rootcontainer
} from 'containers';
import {
    TestComponent
} from 'components';

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