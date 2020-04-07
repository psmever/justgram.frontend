import { FormEvent, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLoginAction } from 'modules/logins';
import { RootState } from 'modules';

export default function useLogin() {

    const login_state = useSelector((state: RootState) => state.login_state);
    const loginState = useMemo(() => login_state, [login_state]);

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

        if(loginState.state === "idle" || loginState.state === "failure") {
            dispatch(userLoginAction({email, password}));
        }
    };

    const handleLoginInfoReset = () => {
        setPassword('');
    }

    return {
        loginState,
        email,
        password,
        handleChangeEmail,
        handleChangePassword,
        handleSubmit,
        handleLoginInfoReset,
    };
};

