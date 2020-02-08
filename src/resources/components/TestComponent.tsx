import React from 'react';

function TestComponent() {
    return (
        <form className="register__form">
            <div className="form__row">
                <input
                    id="email"
                    type="text"
                    className="form__input2"
                    placeholder="your email"
                />
            </div>
            <div className="form__row">
                <input
                    id="password"
                    type="password"
                    className="form__input2"
                    placeholder="password"
                />
            </div>
            <div className="form__row">
                <input
                    id="confirm_password"
                    type="password"
                    className="form__input2"
                    placeholder="password confim"
                />
            </div>
            <div className="form__row">
                <input
                    name="username"
                    type="text"
                    className="form__input2"
                    placeholder="your user name"
                />
            </div>
            <input type="submit" value="submit"/>
        </form>
    );
}

export default TestComponent;