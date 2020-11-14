import styled from 'styled-components';

export const LoginMain = styled.main`
    width: 100%;
    max-width: 800px;
    margin: 45px auto;
    display: flex;
    justify-content: space-around;
`

export const LoginColumn = styled.div`
    width: 45%;
    max-width: 100%;
`

export const LoginColumnImage = styled.img`
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
`

export const LoginLogo = styled.img`
    height: 50px;
`
// TODO: From 처리.
export const LoginForm = styled.form`
`