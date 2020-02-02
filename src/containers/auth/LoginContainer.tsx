import React from 'react';
import { LoginFormComponent } from "components";
import useLogin from 'hooks/useLogin';
import { useHistory } from "react-router-dom";
import GlobalAlert  from 'lib/GlobalAlert';


export default function LoginContainer() {

    const history = useHistory();
    const { login_state, handleChangePassword, handleChangeEmail, handleSubmit } = useLogin();


    if(login_state.state === null) {

    } else if (login_state.state === true) {

        GlobalAlert.thenHistoryPush({
            text: '로그인에 성공 했습니다.',
            push_router: '/feed'
        })

    } else if (login_state.state === false) {
        GlobalAlert.error({
            text: login_state.message
        })
    }


    return (
        <>
            <LoginFormComponent
                onChangeUserEmail={ handleChangeEmail }
                onChangeUserPassword={ handleChangePassword }
                onSubmit={ handleSubmit }
            />
        </>
    );
}