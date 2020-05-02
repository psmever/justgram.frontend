import styled from 'styled-components';

export const LoginMain = styled.main`
    width: 100%;
    max-width: 800px;
    margin: 45px auto;
    display: flex;
    justify-content: space-around;
`;

export const LoginColumn = styled.div`
    width: 45%;

    @media screen and (min-width: 375px) and (max-width: 667px) {
        width: 100%;

        &:first-child {
            display: none;
        }

    }
`

export const LoginPhone = styled.img`
    max-width: 100%;
`

export const LoginBox = styled.div`
    background-color: white;
    border: 1px solid #e6e6e6;

    &:first-child {
        margin-bottom: 10px;
        padding-left: 40px;
        padding-right: 40px;
    }

    padding: 30px 0;
    text-align: center;

    a {
        text-decoration: none;
        color: var(--fd-blue);
    }
`
export const LoginLogo = styled.img`
    height: 50px;
`
export const LoginFormInput = styled.input`
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

    &:first-child {
        margin-bottom: 5px;
    }

`

export const LoginFormSubmit = styled(LoginFormInput.withComponent('input'))`
    background-color: #3f99ed;
    border: 0;
    padding: 5px;
    margin-top: 15px;
    margin-bottom: 20px;
    color: white;
    font-weight: 600;
`