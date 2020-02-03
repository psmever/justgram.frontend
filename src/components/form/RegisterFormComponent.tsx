import React, { FormEvent } from 'react';

interface RegisterFormProps {
    onChangeName: ( real_name: string ) => void;
    onChangeEmail: ( email: string ) => void;
    onChangePassword: ( password: string ) => void;
    onChangeConfirmPassword: ( password: string ) => void;
    onSubmit: ( event: FormEvent<HTMLFormElement>) => void;

}

function RegisterFormComponent({ onChangeName, onChangeEmail, onChangePassword, onChangeConfirmPassword, onSubmit }: RegisterFormProps) {
    return (
        <form method="post" className="register__form">
            <div className="form__row">
                <input
                    id="email"
                    type="text"
                    className="form__input2"
                    placeholder="your email"
                    onChange={ e => onChangeEmail(e.target.value)}
                />
            </div>
            <div className="form__row">
                <input
                    name="name"
                    type="text"
                    className="form__input2"
                    placeholder="your full name"
                    onChange={ e => onChangeName(e.target.value)}
                />
            </div>
            <div className="form__row">
                <input
                    id="password"
                    type="password"
                    className="form__input2"
                    placeholder="password"
                    onChange={ e => onChangePassword(e.target.value)}
                />
            </div>
            <div className="form__row">
                <input
                    id="confirm_password"
                    type="password"
                    className="form__input2"
                    placeholder="password confim"
                    onChange={ e => onChangeConfirmPassword(e.target.value)}
                />
            </div>
            <input type="submit" value="submit" onClick={()=> onSubmit}/>
        </form>
    );
}

export default RegisterFormComponent;