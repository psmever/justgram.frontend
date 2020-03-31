import { FormEvent, useState } from "react";
import { tryRegister } from 'lib/API';
import { APIResponseType } from 'modules/types';

export default function useRegister() {

    const [ registerResult , setRegisterResult] = useState<APIResponseType>({
        state: null,
        message: null,
    });

    const [registerData, setRegisterData] = useState<Partial<{email: string,password: string,confirm_password: string,username: string}>>({
        email: '',
        password: '',
        confirm_password: '',
        username: ''
    });

    const handleChangeUserName = ( username: string) => {
        setRegisterData({
            ...registerData,
            username: username
        });
    }

    const handleChangeEmail = ( email: string ) => {
        setRegisterData({
            ...registerData,
            email: email
        });
    }

    const handleChangePassword = ( password: string) => {
        setRegisterData({
            ...registerData,
            password: password
        });
    }

    const handleChangeConfirmPassword = ( password: string) => {
        setRegisterData({
            ...registerData,
            confirm_password: password
        });
    }

    const handleSubmit = async ( event: FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        const tryResult = await tryRegister({
            username: registerData.username,
            email: registerData.email,
            password: registerData.password,
            confirm_password: registerData.confirm_password
        });

        if(tryResult.state === true || tryResult.state === false){
            setRegisterResult({
                state: tryResult.state,
                message: (tryResult.message) ? tryResult.message : tryResult.data!.message
            });
        }
    }


    return {
        registerData,
        registerResult,
        handleChangePassword,
        handleChangeConfirmPassword,
        handleChangeUserName,
        handleSubmit,
        handleChangeEmail
    };
}