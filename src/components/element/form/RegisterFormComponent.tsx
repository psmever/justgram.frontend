import React, { FormEvent } from 'react';
import { RegisterFormInput, RegisterFormInputSubmit } from 'styles';

interface RegisterFormProps {
    handleChangeUserName: ( username: string ) => void;
    handleChangeEmail: ( email: string ) => void;
    handleChangePassword: ( password: string ) => void;
    handleChangeConfirmPassword: ( password: string ) => void;
    handleSubmit: ( event: FormEvent<HTMLFormElement>) => void;
}

function RegisterFormComponent({
    handleChangeUserName,
    handleChangeEmail,
    handleChangePassword,
    handleChangeConfirmPassword,
    handleSubmit
}: RegisterFormProps) {
    return (
        <form onSubmit={ handleSubmit }>
            <div className="form__row">
                <RegisterFormInput
                    name="email"
                    type="text"
                    className="form__input2"
                    placeholder="your email"
                    onChange={ e => handleChangeEmail(e.target.value)}
                />
            </div>
            <div className="form__row">
                <RegisterFormInput
                    name="password"
                    type="password"
                    className="form__input2"
                    placeholder="password"
                    onChange={ e => handleChangePassword(e.target.value)}
                />
            </div>
            <div className="form__row">
                <RegisterFormInput
                    name="confirm_password"
                    type="password"
                    className="form__input2"
                    placeholder="password confim"
                    onChange={ e => handleChangeConfirmPassword(e.target.value)}
                />
            </div>
            <div className="form__row">
                <RegisterFormInput
                    name="username"
                    type="text"
                    className="form__input2"
                    placeholder="your user name"
                    onChange={ e => handleChangeUserName(e.target.value)}
                />
            </div>
            <RegisterFormInputSubmit type="submit" value="submit"/>
        </form>
    );
}

export default RegisterFormComponent;