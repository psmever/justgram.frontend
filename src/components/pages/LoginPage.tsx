import React from 'react';

import { LoginFormComponent, FooterComponent } from 'components';
import { Link } from 'react-router-dom';
import useLogin from "hooks/useLogin";

import image_phoneImage from 'assets/images/phoneImage.png';
import image_loginLogo from 'assets/images/loginLogo.png';

function LoginPage() {

    const {
        loginStatus,
        email,
        password,
        handleChangePassword,
        handleChangeEmail,
        handleSubmit,
        loginRequired,
    } = useLogin();

    return (
        <div>
            <main id="login">
                <div className="login__column"><img src={ image_phoneImage } className="login__phone" alt="phoneimage"/></div>
                <div className="login__column">
                    <div className="login__box">
                        <img src={ image_loginLogo } className="login__logo" alt="loginlogo"/>

                            <LoginFormComponent
                                loginstate = {loginStatus}
                                onChangeUserEmail={ handleChangeEmail }
                                onChangeUserPassword={ handleChangePassword }
                                onSubmit={ handleSubmit }
                                inputEmail={ email }
                                inputPassword={ password }
                            />
                            {loginRequired&&<span>{loginRequired}</span>}
                        {/* <span className="login__divider">or</span> */}
                        {/* <a href={`/login`} className="login__link login__link--small">Forgot password</a> */}
                    </div>
                    <div className="login__box">
                            <span>계정이 없으신가요?</span>
                            <Link to={process.env.PUBLIC_URL + "/register"}>&nbsp;회원 가입</Link>
                    </div>
                    {/* <div className="login__box--transparent">
                        <span>Get the app.</span>
                        <div className="login__appstores">
                            <img src={ image_ios } className="login__appstore" alt="Apple appstore logo" title="Apple appstore logo" />
                            <img src={ image_android } className="login__appstore" alt="Android appstore logo" title="Android appstore logo" />
                        </div>
                    </div> */}
                </div>
            </main>

            <FooterComponent />
        </div>
    );
}

export default LoginPage;