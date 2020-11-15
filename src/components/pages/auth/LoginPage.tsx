import React from 'react';
import {
    LoginMain,
    LoginColumn,
    LoginColumnImage,
    LoginBox,
    LoginLogo,
    LoginForm,
    LoginFormInput,
    LoginFromButton,
    LoginDivider,
    LoginLink,
    LoginLinkSmall,
    LoginBoxSignUpLink,
    LoginBoxTransparent,
    LoginGoAppStores,
    LoginGoAppStore,
} from 'styled/Login';

export default function LoginPage() {


    return (
        <>
            <LoginMain>
                <LoginColumn>
                    <LoginColumnImage src={process.env.PUBLIC_URL + '/assets/images/phoneimage.png'}/>
                </LoginColumn>
                <LoginColumn>
                    <LoginBox>
                        <LoginLogo src={process.env.PUBLIC_URL + '/assets/images/loginLogo.png'}/>
                        <LoginForm>
                            <LoginFormInput type="text" name="username" placeholder="Username" required />
                            <LoginFormInput type="password" name="password" placeholder="Password" required />
                            <LoginFromButton>로그인</LoginFromButton>
                        </LoginForm>
                        <LoginDivider>or</LoginDivider>
                        <LoginLink to="" onClick={(e) => e.preventDefault()}>
                            <i className="fa fa-money"></i>
                            페이스북으로 로그인
                        </LoginLink>
                        <LoginLinkSmall to="" onClick={(e) => e.preventDefault()}>비밀번호가 생각 안나세요?</LoginLinkSmall>
                    </LoginBox>
                    <LoginBox>
                        <span>계정이 없으신가요?</span> <LoginBoxSignUpLink to="" onClick={(e) => e.preventDefault()}>Sign up</LoginBoxSignUpLink>
                    </LoginBox>
                    <LoginBoxTransparent>
                        <span>Get the app.</span>
                        <LoginGoAppStores>
                            <LoginGoAppStore src={process.env.PUBLIC_URL + '/assets/images/ios.png'} alt="Apple appstore logo" title="Apple appstore logo" />
                            <LoginGoAppStore src={process.env.PUBLIC_URL + '/assets/images/android.png'} alt="Android appstore logo" title="Android appstore logo" />
                        </LoginGoAppStores>
                    </LoginBoxTransparent>
                </LoginColumn>
            </LoginMain>
            <footer className="footer">
                <div className="footer__column">
                    <nav className="footer__nav">
                        <ul className="footer__list">
                            <li className="footer__list-item"><a href="LINK" className="footer__link">Blog Front</a></li>
                            <li className="footer__list-item"><a href="LINK" className="footer__link">Blog Backend</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="footer__column">
                    <span className="footer__copyright">© 2020 JustGram</span>
                </div>
            </footer>
        </>
    );
}