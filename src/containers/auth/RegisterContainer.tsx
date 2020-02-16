import React, {useEffect} from 'react';
import { RegisterPage } from 'components';

import useRegister from 'hooks/useRegister';
import GlobalAlert from 'lib/GlobalAlert';

export default function RegisterContainer() {

    const {
        registerResult
    } = useRegister();

    useEffect(() => {

        if(registerResult.state === true) {
            GlobalAlert.thenHistoryPush({
                text: registerResult.message,
                push_router: '/'
            });
        } else if(registerResult.state === false) {
            GlobalAlert.error({
                text: registerResult.message
            });
        }
    }, [registerResult])

    return (
        <>
            <RegisterPage

             />
        </>
    );
}