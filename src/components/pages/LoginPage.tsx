import React from 'react';
import { LoginMain, LoginColumn, LoginPhone, LoginBox, LoginLogo } from 'styles';
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
            <LoginMain>
                <LoginColumn><LoginPhone src={ image_phoneImage } alt="phoneimage"/></LoginColumn>
                <LoginColumn>
                    <LoginBox>
                        <LoginLogo src={ image_loginLogo } alt="loginlogo"/>
                            <LoginFormComponent
                                loginstate = {loginStatus}
                                onChangeUserEmail={ handleChangeEmail }
                                onChangeUserPassword={ handleChangePassword }
                                onSubmit={ handleSubmit }
                                inputEmail={ email }
                                inputPassword={ password }
                            />
                            {loginRequired && <span>{loginRequired}</span>}
                        {/* <span className="login__divider">or</span> */}
                        {/* <a href={`/login`} className="login__link login__link--small">Forgot password</a> */}
                    </LoginBox>
                    <LoginBox>
                            <span>계정이 없으신가요?</span>
                            <Link to={process.env.PUBLIC_URL + "/register"}>&nbsp;회원 가입</Link>
                    </LoginBox>
                    {/* <div className="login__box--transparent">
                        <span>Get the app.</span>
                        <div className="login__appstores">
                            <img src={ image_ios } className="login__appstore" alt="Apple appstore logo" title="Apple appstore logo" />
                            <img src={ image_android } className="login__appstore" alt="Android appstore logo" title="Android appstore logo" />
                        </div>
                    </div> */}
                </LoginColumn>
            </LoginMain>

            <FooterComponent />
        </div>
    );
}

export default LoginPage;