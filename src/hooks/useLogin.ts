import { FormEvent, useState } from 'react';
import { tryLogin } from 'lib/API';
import { useDispatch, useSelector } from 'react-redux';
import { tryLoginAsync } from 'modules/logins';
import { RootState } from 'modules';

export default function useLogin() {

    const login_state = useSelector((state: RootState) => state.login_state);

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
        } else {
            dispatch(tryLoginAsync.failure(new Error(typeof tryResult.message === "string" ? tryResult.message : '로그인에 실패 했습니다.')));
        }
    };

    return {
        login_state,
        handleChangeEmail,
        handleChangePassword,
        handleSubmit,
    };
};

