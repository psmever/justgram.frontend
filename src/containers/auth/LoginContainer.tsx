import React from 'react';
import { LoginFormComponent } from "components";
import useLogin from 'hooks/useLogin';

export default function LoginContainer() {

    const { handleChangePassword, handleChangeEmail, handleSubmit } = useLogin();

    return (
        <>
            <LoginFormComponent
                onChangeUserEmail={ handleChangeEmail }
                onChangeUserPassword={ handleChangePassword }
                onSubmit={ handleSubmit }
            />
        </>
    );
}