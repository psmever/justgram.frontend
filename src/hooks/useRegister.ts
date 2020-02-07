import { FormEvent, useState } from "react";
import { tryRegister } from 'lib/API';
import { APIResponseType } from 'modules/types';

export default function useRegister() {

    const [ registerResult , setRegisterResult] = useState<APIResponseType>({
        state: null,
        data: null,
    });
    const [ username, setUserName] = useState('');
    const [ email, setEmail] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmpassword, setConfirmpassword] = useState('');

    const handleChangeUserName = ( username: string) => {
        setUserName(username);
    }

    const handleChangeEmail = ( email: string ) => {
        setEmail(email);
    }

    const handleChangePassword = ( password: string) => {
        setPassword(password);
    }

    const handleChangeConfirmPassword = ( password: string) => {
        setConfirmpassword(password);
    }

    const handleSubmit = async ( event: FormEvent<HTMLFormElement> ) => {
        event.preventDefault();

        const tryResult = await tryRegister({
            username: username,
            email: email,
            password: password,
            confirm_password: confirmpassword
        });

        if(tryResult.state === true || tryResult.state === false){
            setRegisterResult({
                state: tryResult.state,
                message: tryResult.message
            });
        }

    }


    return {
        registerResult,
        handleChangePassword,
        handleChangeConfirmPassword,
        handleChangeUserName,
        handleSubmit,
        handleChangeEmail
    };
}