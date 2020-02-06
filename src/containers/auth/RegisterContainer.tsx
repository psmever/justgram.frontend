import React, {useEffect} from 'react';
import { RegisterFormComponent } from 'components';

import useRegister from 'hooks/useRegister';
import GlobalAlert from 'lib/GlobalAlert';

export default function RegisterContainer() {

    const {
        registerResult,
        handleChangePassword,
        handleChangeConfirmPassword,
        handleChangeUserName,
        handleSubmit,
        handleChangeEmail
    } = useRegister();

    useEffect(() => {

        if(registerResult.state === true) {
            GlobalAlert.thenHistoryPush({
                text: registerResult.data?.message,
                push_router: '/'
            });
        } else if(registerResult.state === false) {
            // GlobalAlert.error({
            //     text:
            // });
            console.debug(registerResult);
        }
    }, [registerResult])

    return (
        <>
            <RegisterFormComponent
                handleChangeEmail={ handleChangeEmail }
                handleChangeUserName={ handleChangeUserName }
                handleChangePassword={ handleChangePassword }
                handleChangeConfirmPassword={ handleChangeConfirmPassword }
                handleSubmit={ handleSubmit }
             />
        </>
    );
}