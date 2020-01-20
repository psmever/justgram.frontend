import React, { FormEvent, useState, useEffect }  from 'react';
// import { useHistory } from "react-router-dom";
import { LoginForm } from "components";
import { RootState } from 'modules';
import { useDispatch, useSelector } from 'react-redux';


// import useTryLogin from "hooks/login/useTryLogin";

// import { storageManager } from "lib/Helper";

import { tryLoginAsync } from 'modules/logins';


export default function LoginContainer() {

    // const history = useHistory();

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    // const [ logincheck, setLogincheck ] = useState(false);

    const dispatch = useDispatch();
    const { request } = useSelector((state: RootState) => state.logins.login);


    // const tryLoginHook = useTryLogin();

    const onChangeEmail = ( email: string ) => {
        setEmail(email);
    };

    const onChangePassword = ( password: string ) => {
        setPassword(password);
    };

    const onSubmit = async ( e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault();

        // const checkResult = await tryLogin({email: email, password: password});

        // console.debug({email, password});

        dispatch(tryLoginAsync.request({email: email, password: password}));

        // history.push('/feed');

        // tryLoginHook({
        //     email: email,
        //     password: password
        // });

        // if( checkResult.state === true) {
        //     storageManager.set('login_info', checkResult.data);
        //     setLogincheck(true);
        // } else {
        //     setLogincheck(false);
        // }
    };

    useEffect(() => {

    }, []);


    return (
        <>
            <LoginForm
                onChangeUserEmail={ onChangeEmail }
                onChangeUserPassword={ onChangePassword }
                onSubmit={ onSubmit }

            />
            {request && <p style={{ textAlign: 'center' }}>tryLogin..</p>}
        </>
    );
}