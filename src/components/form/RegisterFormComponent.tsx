import React, { FormEvent } from 'react';

interface RegisterFormProps {
    handleChangeName: ( real_name: string ) => void;
    handleChangeEmail: ( email: string ) => void;
    handleChangePassword: ( password: string ) => void;
    handleChangeConfirmPassword: ( password: string ) => void;
    handleSubmit: ( event: FormEvent<HTMLFormElement>) => void;
}

function RegisterFormComponent({

    handleChangeName,
    handleChangeEmail,
    handleChangePassword,
    handleChangeConfirmPassword,
    handleSubmit,

}: RegisterFormProps) {
    return (
        <form className="register__form" onSubmit={ handleSubmit }>
            <div className="form__row">
                <input
                    id="email"
                    type="text"
                    className="form__input2"
                    placeholder="your email"
                    onChange={ e => handleChangeEmail(e.target.value)}
                />
            </div>
            <div className="form__row">
                <input
                    name="name"
                    type="text"
                    className="form__input2"
                    placeholder="your full name"
                    onChange={ e => handleChangeName(e.target.value)}
                />
            </div>
            <div className="form__row">
                <input
                    id="password"
                    type="password"
                    className="form__input2"
                    placeholder="password"
                    onChange={ e => handleChangePassword(e.target.value)}
                />
            </div>
            <div className="form__row">
                <input
                    id="confirm_password"
                    type="password"
                    className="form__input2"
                    placeholder="password confim"
                    onChange={ e => handleChangeConfirmPassword(e.target.value)}
                />
            </div>
            <input type="submit" value="submit"/>
        </form>
    );
}

export default RegisterFormComponent;