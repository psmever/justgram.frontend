import React, { useEffect, FormEvent } from 'react';
import { LoginFormComponent } from "components";
import GlobalAlert  from 'lib/GlobalAlert';
import { loginSagaInterface } from 'modules/interface';

interface LoginContainerProps  {
    loginState? : loginSagaInterface;
    email: string;
    password: string;
    handleChangePassword: ( user_email: string ) => void;
    handleChangeEmail: ( user_password: string ) => void;
    handleSubmit: ( event: FormEvent<HTMLFormElement> ) => void;
    handleLoginInfoReset: () => void;
};

export default function LoginContainer({
    loginState,
    email,
    password,
    handleChangePassword,
    handleChangeEmail,
    handleSubmit,
    handleLoginInfoReset,
}: LoginContainerProps ) {

    const loginStatus = loginState?.state;

    useEffect(() => {
        switch (loginStatus) {
            case "yet" : {

                break;
            }
            case "success" : {
                GlobalAlert.thenHistoryPush({
                    text: '로그인에 성공 했습니다.',
                    push_router: '/feed'
                });
                break;
            }
            case "failure" : {
                GlobalAlert.error({
                    text: loginState?.message
                });

                handleLoginInfoReset();
                break;
            }
        }
    })

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