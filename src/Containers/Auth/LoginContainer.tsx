import * as React from 'react';

import image_phoneImage from 'Assets/Images/phoneImage.png';
import image_loginLogo from 'Assets/Images/loginLogo.png';
import image_ios from 'Assets/Images/ios.png';
import image_android from 'Assets/Images/android.png';

function LoginContainer() {
    return (
            <div>
                <main id="login">
                    <div className="login__column"><img src={ image_phoneImage } className="login__phone" alt="phoneimage"/></div>
                    <div className="login__column">
                        <div className="login__box">
                            <img src={ image_loginLogo } className="login__logo" alt="loginlogo"/>
                            <form action={`/feed`} method="get" className="login__form">
                                <input type="text" name="username" placeholder="Username" required />
                                <input type="password" name="password" placeholder="Password" required />
                                <input type="submit" value="Log in" />
                            </form>
                            <span className="login__divider">or</span>
                            <a href={`/login`} className="login__link"><i className="fa fa-money"></i>Log in with Facebook</a>
                            <a href={`/login`} className="login__link login__link--small">Forgot password</a>
                        </div>
                        <div className="login__box"><span>Don't have an account?</span> <a href={`/login`}>Sign up</a></div>
                        <div className="login__box--transparent">
                            <span>Get the app.</span>
                            <div className="login__appstores">
                                <img src={ image_ios } className="login__appstore" alt="Apple appstore logo" title="Apple appstore logo" />
                                <img src={ image_android } className="login__appstore" alt="Android appstore logo" title="Android appstore logo" />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
    );
}

export default LoginContainer;