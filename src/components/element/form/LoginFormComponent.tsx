import React, { FormEvent } from 'react';
import * as commonTypes from 'modules/commonTypes';

interface LoginFormProps  {
    loginstate: commonTypes.SagaStatus;
    inputEmail: string;
    inputPassword: string;
    onChangeUserEmail: ( user_email: string ) => void;
    onChangeUserPassword: ( user_password: string ) => void;
    // effectMessage: ( effect_message: string | null) => void;
    onSubmit: ( event: FormEvent<HTMLFormElement> ) => void;
};

function LoginFormComponent( { loginstate, inputEmail, inputPassword, onChangeUserEmail, onChangeUserPassword, onSubmit }: LoginFormProps ) {
    return (
        <form method="post" className="login__form" onSubmit={ onSubmit }>
            <input
                type="text"
                name="user_email"
                placeholder="로그인 이메일을 입력해 주세요."
                onChange={ e => onChangeUserEmail(e.target.value) }
                value={inputEmail}
                required
            />
            <input
                type="password"
                name="user_password"
                placeholder="비밀 번호를 입력해 주세요."
                onChange={ e => onChangeUserPassword(e.target.value) }
                value={inputPassword}
                required
            />
            {loginstate === "loading"
                ? <input type="submit" value="::잠시만 기다려주세요::" disabled/>
                : <input type="submit" value="로그인" />
            }

        </form>
    );
}

export default LoginFormComponent;