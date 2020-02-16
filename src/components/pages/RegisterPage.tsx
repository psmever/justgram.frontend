import * as React from 'react';

import {
    FooterComponent,
    RegisterFormComponent,
} from 'components';

import useRegister from "hooks/useRegister";

import image_loginLogo from 'assets/images/loginLogo.png';

export default function RegisterPage() {

    const {
        handleChangePassword,
        handleChangeConfirmPassword,
        handleChangeUserName,
        handleSubmit,
        handleChangeEmail
    } = useRegister();

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