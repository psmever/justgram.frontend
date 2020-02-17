import React, {useEffect} from 'react';
import GlobalAlert from 'lib/GlobalAlert';

import {
    FooterComponent,
    RegisterFormComponent,
} from 'components';

import useRegister from "hooks/useRegister";

import image_loginLogo from 'assets/images/loginLogo.png';

export default function RegisterPage() {

    const {
        registerData,
        registerResult,
        handleChangePassword,
        handleChangeConfirmPassword,
        handleChangeUserName,
        handleSubmit,
        handleChangeEmail
    } = useRegister();

    useEffect(() => {
        console.debug(registerData);
    }, [registerData])


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
            <main id="register">
                <div className="register__column">
                    <div className="register__box">
                        <img src={ image_loginLogo } className="register__logo" alt="register_logo"/>

                        <RegisterFormComponent
                            handleChangeUserName={handleChangeUserName}
                            handleChangeEmail={handleChangeEmail}
                            handleChangePassword={handleChangePassword}
                            handleChangeConfirmPassword={handleChangeConfirmPassword}
                            handleSubmit={handleSubmit}
                        />

                    </div>
                </div>
            </main>

            <FooterComponent />
        </>
    );
}