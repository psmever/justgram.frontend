import React, { FormEvent } from 'react';

type LoginFormProps = {
    onChangeUserEmail: ( user_email: string ) => void;
    onChangeUserPassword: ( user_email: string ) => void;
    onSubmit: ( event: FormEvent<HTMLFormElement> ) => void;
};

function LoginForm( { onChangeUserEmail, onChangeUserPassword, onSubmit }: LoginFormProps ) {
    return (
        <form action={`/feed`} method="post" className="login__form" onSubmit={ onSubmit }>
            <input
                type="text"
                name="user_email"
                placeholder="로그인 이메일을 입력해 주세요."
                onChange={ e => onChangeUserEmail(e.target.value) }
                required
            />
            <input
                type="password"
                name="user_password"
                placeholder="비밀 번호를 입력해 주세요."
                onChange={ e => onChangeUserPassword(e.target.value) }
                required
            />
            <input type="submit" value="로그인" />
        </form>
    );
}

export default LoginForm;