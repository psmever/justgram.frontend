import * as React from 'react';
import { LoginContainer } from 'containers';
import { FooterComponent } from 'components';

import image_phoneImage from 'assets/images/phoneImage.png';
import image_loginLogo from 'assets/images/loginLogo.png';
import image_ios from 'assets/images/ios.png';
import image_android from 'assets/images/android.png';
import { Link } from 'react-router-dom';

export default function LoginPage() {
    return (
        <>
            <main id="login">
                <div className="login__column"><img src={ image_phoneImage } className="login__phone" alt="phoneimage"/></div>
                <div className="login__column">
                    <div className="login__box">
                        <img src={ image_loginLogo } className="login__logo" alt="loginlogo"/>

                        <LoginContainer />

                        <span className="login__divider">or</span>
                        <a href={`/login`} className="login__link"><i className="fa fa-money"></i>Log in with Facebook</a>
                        <a href={`/login`} className="login__link login__link--small">Forgot password</a>
                    </div>
                    <div className="login__box"><span>Don't have an account?</span> <Link to="/register">Sign up</Link></div>
                    <div className="login__box--transparent">
                        <span>Get the app.</span>
                        <div className="login__appstores">
                            <img src={ image_ios } className="login__appstore" alt="Apple appstore logo" title="Apple appstore logo" />
                            <img src={ image_android } className="login__appstore" alt="Android appstore logo" title="Android appstore logo" />
                        </div>
                    </div>
                </div>
            </main>

            <FooterComponent />
        </>
    );
}