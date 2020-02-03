import * as React from 'react';

import { RegisterContainer } from 'containers';
import { FooterComponent } from 'components';

import image_loginLogo from 'assets/images/loginLogo.png';

export default function RegisterPage() {
    return (
        <>

            <main id="register">
                <div className="register__column">
                    <div className="register__box">
                        <img src={ image_loginLogo } className="register__logo" alt="register_logo"/>
                        <RegisterContainer />
                    </div>
                </div>
            </main>

            <FooterComponent />
        </>
    );
}