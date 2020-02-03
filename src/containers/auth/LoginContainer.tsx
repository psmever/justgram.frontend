import React from 'react';
import { LoginFormComponent } from "components";
import useLogin from 'hooks/useLogin';
import GlobalAlert  from 'lib/GlobalAlert';


export default function LoginContainer() {

    const {  login_state, nicknameLength, handleChangePassword, handleChangeEmail, handleSubmit } = useLogin();
console.debug("prevState:: ",login_state);

    // switch (login_state.state) {
    //     case "yet" : {

    //         break;
    //     }
    //     case "success" : {
    //         GlobalAlert.thenHistoryPush({
    //             text: '로그인에 성공 했습니다.',
    //             push_router: '/feed'
    //         });
    //         break;
    //     }
    //     case "failure" : {
    //         GlobalAlert.error({
    //             text: login_state.message
    //         });
    //         // handleLoginInfoReset();
    //         break;
    //     }
    // }

    // if (login_state.state === true) {
    //     GlobalAlert.thenHistoryPush({
    //         text: '로그인에 성공 했습니다.',
    //         push_router: '/feed'
    //     });
    // } else if (login_state.state === false) {
    //     GlobalAlert.error({
    //         text: login_state.message
    //     });
    //     handleLoginInfoReset();
    // }


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