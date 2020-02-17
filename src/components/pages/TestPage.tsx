import React, {Fragment} from 'react';
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
                    <TestComponent/>
            </div>
        </Fragment>
    );
}

export default TestPage;