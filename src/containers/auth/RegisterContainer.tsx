import React from 'react';
import { RegisterFormComponent } from 'components';
import useRegister from 'hooks/useRegister';

export default function RegisterContainer() {

    const {
        registerResult,
        handleChangePassword,
        handleChangeConfirmPassword,
        handleChangeName,
        handleSubmit,
        handleChangeEmail
    } = useRegister();

    if(registerResult.state) {
        console.debug(registerResult);
    }

    return (
        <>
            <RegisterFormComponent
            onChangeEmail={ handleChangeEmail }
            onChangeName={ handleChangeName }
            onChangePassword={ handleChangePassword }
            onChangeConfirmPassword={ handleChangeConfirmPassword }
            onSubmit={ handleSubmit }
             />
        </>
    );
}