import * as React from 'react';

// import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';

import GlobalAlert  from 'lib/GlobalAlert';


import { TestButtonComponent } from 'resources/components';

function TestContainer() {

    // const SwalAlert = withReactContent(Swal);;

    const handleButtonClick = () => {
        console.debug("handleButtonClick");

        // SwalAlert.fire({
        //     icon: "error",
        //     text: '테스트',
        // }).then((result) => {
        //
        //     console.debug('Alert then');
        // });

        GlobalAlert.thenHistoryPush({
            text: '성공',
            push_router: '/feed'
        });

    }

    return (
        <>
            <TestButtonComponent
                onClickButton={handleButtonClick}
            />
        </>
    );
}

export default TestContainer;