import { FormEvent, useState } from "react";
import { tryRegister } from 'lib/API';
import { APIResponse } from 'modules/interface';

export default function useRegister() {

    const [ registerResult , setRegisterResult] = useState<APIResponse>({
        state: null,
        data: null,
    });
    const [ name, setName] = useState('');
    const [ email, setEmail] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmpassword, setConfirmpassword] = useState('');

    const handleChangeName = ( name: string) => {
        setName(name);
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
            name: name,
            email: email,
            password: password,
            confirm_password: confirmpassword
        });

        console.debug(tryResult.state, tryResult);

        if(tryResult.state === true) {
            setRegisterResult({
                state: (tryResult.state) ? tryResult.state : null,
                data: tryResult.data
            });
        }

    }


    return {
        registerResult,
        handleChangePassword,
        handleChangeConfirmPassword,
        handleChangeName,
        handleSubmit,
        handleChangeEmail
    };


}