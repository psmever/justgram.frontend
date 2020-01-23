import React, { FormEvent, useState, useEffect }  from 'react';
// import { useHistory } from "react-router-dom";
import { LoginForm } from "components";
import { RootState } from 'modules';
import { useDispatch, useSelector } from 'react-redux';
import { tryLoginAsync } from 'modules/logins';

export default function LoginContainer() {

    // const history = useHistory();

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const dispatch = useDispatch();
    const { request, data, error } = useSelector((state: RootState) => state.logins.login);

    const onChangeEmail = ( email: string ) => {
        setEmail(email);
    };

    const onChangePassword = ( password: string ) => {
        setPassword(password);
    };

    const onSubmit = async ( e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault();

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

        if(error) {
            console.debug({error: error});
        } else if (request === false && data) {
            // 푸하하하하하핳..
        }

        console.debug(typeof error);

    }, [request, data, error]);


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