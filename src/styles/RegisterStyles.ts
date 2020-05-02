import styled from 'styled-components';

export const RegisterMainStyle = styled.main`
    width: 100%;
    max-width: 800px;
    margin: 45px auto;
    display: flex;
    justify-content: space-around;
`

export const RegisterColumnStyle = styled.div`
    width: 60%;
`

export const RegisterBoxStyle = styled.div`
    background-color: white;
    border: 1px solid #e6e6e6;
    padding: 30px 0;
    text-align: center;

    &:first-child {
        margin-bottom: 10px;
        padding-left: 40px;
        padding-right: 40px;
    }

    a {
        text-decoration: none;
        color: var(--fd-blue);
    }
`

export const RegisterLogoStyle = styled.img`
    height: 50px;
`

export const RegisterFormInput = styled.input`
    &:first-child {
        margin-bottom: 5px;
    }

    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 7px;
    font-size: 14px;
    border: 0;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    background: #fafafa;

    &:focus {
        outline: none;
        border: 1px solid #a9a9a9;
    }
`

export const RegisterFormInputSubmit = styled.input`
    background-color: #3f99ed;
    border: 0;
    padding: 5px;
    margin-top: 15px;
    margin-bottom: 20px;
    color: white;
    font-weight: 600;
    width: 100%;
`