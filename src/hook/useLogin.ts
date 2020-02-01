import { FormEvent, useState } from 'react';
import { tryLogin } from 'lib/API';
import { useDispatch } from 'react-redux';
import { tryLoginAsync } from 'modules/logins';
import { useHistory } from "react-router-dom";

export default function useLogin() {

    const history = useHistory();

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const dispatch = useDispatch();

    const handleChangeEmail = (email: string) => {
        setEmail(email);
    };

    const handleChangePassword = (password: string) => {
        setPassword(password);
    };

    const handleSubmit = async ( event: FormEvent<HTMLFormElement> ) => {
        event.preventDefault();

        const tryResult = await tryLogin(email, password);

        if(tryResult.state === true) {
            dispatch(tryLoginAsync.success(tryResult.data));

            history.push('/feed');
        } else {
            dispatch(tryLoginAsync.failure(new Error(typeof tryResult.message === "string" ? tryResult.message : '로그인에 실패 했습니다.')));
        }
    };

    return {
        handleChangeEmail,
        handleChangePassword,
        handleSubmit,
    };
};

