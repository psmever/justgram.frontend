import { FormEvent, useState, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLoginAction } from 'modules/logins';
import { RootState } from 'modules';
import history from 'routes/History';

export default function useLogin() {

    const login_state = useSelector((state: RootState) => state.login_state);
    const loginState = useMemo(() => login_state, [login_state]);

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const [ loginRequired, setLoginRequired ] = useState<string | null>(null);

    const dispatch = useDispatch();

    const loginStatus = loginState.state;

    const handleChangeEmail = (email: string) => {
        setEmail(email);
    };

    const handleChangePassword = (password: string) => {
        setPassword(password);
    };

    const handleSubmit = async ( event: FormEvent<HTMLFormElement> ) => {
        event.preventDefault();

        if(loginState.state !== "loading") {
            dispatch(userLoginAction({email, password}));
        }
    };

    const handleLoginInfoReset = () => {
        setPassword('');
    }

    useEffect(() => {
        switch (loginStatus) {
            case "success" : {
                setLoginRequired('로그인 되었습니다.');
                history.push(process.env.PUBLIC_URL + "/feed");
                break;
            }
            case "failure" : {
                if(login_state.message) {
                    setLoginRequired(login_state.message);
                } else {
                    setLoginRequired('다시 로그인해 주세요.');
                }
                break;
            }
        }
    }, [login_state, loginStatus])

    return {
        loginStatus,
        email,
        password,
        handleChangeEmail,
        handleChangePassword,
        handleSubmit,
        handleLoginInfoReset,
        loginRequired,
    };
};

