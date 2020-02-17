import React, {useEffect} from 'react';

import { LoginFormComponent, FooterComponent } from 'components';
import { Link } from 'react-router-dom';
import GlobalAlert  from 'lib/GlobalAlert';
import useLogin from "hooks/useLogin";


import image_phoneImage from 'assets/images/phoneImage.png';
import image_loginLogo from 'assets/images/loginLogo.png';
import image_ios from 'assets/images/ios.png';
import image_android from 'assets/images/android.png';

function LoginPage() {

    const {
        loginState,
        email,
        password,
        handleChangePassword,
        handleChangeEmail,
        handleSubmit
    } = useLogin();

    const loginStatus = loginState?.state;

    useEffect(() => {
        switch (loginStatus) {
            case "yet" : {

                break;
            }
            case "success" : {
                GlobalAlert.thenLocationReload({
                    text: '로그인에 성공 했습니다.'
                });
                break;
            }
            case "failure" : {
                GlobalAlert.error({
                    text: "로그인에 성공하지 못했습니다."
                });

                // handleLoginInfoReset();
                break;
            }
        }
    }, [loginStatus])

    return (
        <div>
            <main id="login">
                <div className="login__column"><img src={ image_phoneImage } className="login__phone" alt="phoneimage"/></div>
                <div className="login__column">
                    <div className="login__box">
                        <img src={ image_loginLogo } className="login__logo" alt="loginlogo"/>

                        <LoginFormComponent
                            onChangeUserEmail={ handleChangeEmail }
                            onChangeUserPassword={ handleChangePassword }
                            onSubmit={ handleSubmit }
                            inputEmail={email}
                            inputPassword={password}
                         />

                        <span className="login__divider">or</span>
                        <a href={`/login`} className="login__link"><i className="fa fa-money"></i>Log in with Facebook</a>
                        <a href={`/login`} className="login__link login__link--small">Forgot password</a>
                    </div>
                    <div className="login__box">
                            <span>Don't have an account?</span>
                            <Link to="/register">Sign up</Link>
                    </div>
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
        </div>
    );
}

export default LoginPage;