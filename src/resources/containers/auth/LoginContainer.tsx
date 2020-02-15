import React, { useEffect } from 'react';
import { LoginFormComponent } from "resources/components";
import GlobalAlert  from 'lib/GlobalAlert';
import useLogin from "hooks/useLogin";
export default function LoginContainer() {

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
        <>
            <LoginFormComponent
                onChangeUserEmail={ handleChangeEmail }
                onChangeUserPassword={ handleChangePassword }
                onSubmit={ handleSubmit }
                inputEmail={email}
                inputPassword={password}
            />
        </>
    );
}