import React, {useEffect} from 'react';
import GlobalAlert from 'lib/GlobalAlert';
import {RegisterMainStyle, RegisterColumnStyle, RegisterBoxStyle, RegisterLogoStyle } from 'styles';
import {
    FooterComponent,
    RegisterFormComponent,
} from 'components';

import useRegister from "hooks/useRegister";

import image_loginLogo from 'assets/images/loginLogo.png';

export default function RegisterPage() {

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
            <RegisterMainStyle>
                <RegisterColumnStyle>
                    <RegisterBoxStyle>
                        <RegisterLogoStyle src={ image_loginLogo } alt="register_logo"/>

                        <RegisterFormComponent
                            handleChangeUserName={handleChangeUserName}
                            handleChangeEmail={handleChangeEmail}
                            handleChangePassword={handleChangePassword}
                            handleChangeConfirmPassword={handleChangeConfirmPassword}
                            handleSubmit={handleSubmit}
                        />

                    </RegisterBoxStyle>
                </RegisterColumnStyle>
            </RegisterMainStyle>

            <FooterComponent />
        </>
    );
}