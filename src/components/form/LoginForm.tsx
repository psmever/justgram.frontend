import React, { ChangeEvent,FormEvent, useState }  from 'react';


function LoginForm() {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        console.debug('onChangeEmail : ',e);
        setEmail(e.target.value);
    };

    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        console.debug('onChangePassword : ', e);
        setPassword(e.target.value);
    };


    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
    }

    return (
        <form action={`/feed`} method="post" className="login__form" onSubmit={onSubmit}>
            <input
                type="text"
                name="username"
                placeholder="로그인 이메일을 입력해 주세요."
                onChange={ onChangeEmail }
                required
            />
            <input
                type="password"
                name="password"
                placeholder="비밀 번호를 입력해 주세요."
                onChange={ onChangePassword }
                required
            />
            <input type="submit" value="로그인" />
        </form>
    );
}

export default LoginForm;