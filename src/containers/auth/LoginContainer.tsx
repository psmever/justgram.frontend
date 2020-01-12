import React, { FormEvent, useState, useEffect }  from 'react';
import { useHistory } from "react-router-dom";
import { LoginForm } from "components";
import { tryLogin } from "lib/API";
import { storageManager } from "lib/Helper";

export default function LoginContainer() {

    const history = useHistory();

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ logincheck, setLogincheck ] = useState(false);

    const onChangeEmail = ( email: string ) => {
        setEmail(email);
    };

    const onChangePassword = ( password: string ) => {
        setPassword(password);
    };

    const onSubmit = async ( e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault();

        const checkResult = await tryLogin(email, password);

        if( checkResult.state === true) {
            storageManager.set('login_info', checkResult.data);
            setLogincheck(true);
        } else {
            setLogincheck(false);
        }
    };

    useEffect(() => {
        if(logincheck === true) {
            history.push('/feed');
        }
        //TODO: eslint-disable-next-line
        // eslint-disable-next-line
    }, [logincheck]);


    return (
        <>
            <LoginForm
                onChangeUserEmail={ onChangeEmail }
                onChangeUserPassword={ onChangePassword }
                onSubmit={ onSubmit }
            />
        </>
    );
}