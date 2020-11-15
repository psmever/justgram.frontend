import styled from 'styled-components';
import { Link } from "react-router-dom";

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
    padding: 30px 0;
    text-align: center;

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
export const LoginForm = styled.div`
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

export const LoginFromButton = styled.button`
    background-color: #3f99ed;
    border: 0;
    padding: 5px;
    margin-top: 15px;
    margin-bottom: 20px;
    color: white;
    font-weight: 600;
    width: 100%;
    border-radius: 0.5rem;
`

export const LoginDivider = styled.span`
    display: block;
    text-transform: uppercase;
    font-weight: 600;
    color: #999;
    margin-bottom: 20px;
    position: relative;
    width: 100%;

    &:before {
        content: "";
        height: 1px;
        background-color: rgba(153, 153, 153, 0.5);
        width: 40%;
        position: absolute;
        left: 0;
        top: 10px;
    }

    &:after {
        content: "";
        height: 1px;
        background-color: rgba(153, 153, 153, 0.5);
        width: 40%;
        position: absolute;
        right: 0;
        top: 10px;
    }
`

export const LoginLink = styled(Link)`
    display: block;
    text-decoration: none;
    color: #003569;
`

export const LoginLinkSmall = styled(Link)`
    display: block;
    text-decoration: none;
    color: #003569;
    margin-top: 30px;
`

export const LoginBoxSignUpLink = styled(Link)`
    text-decoration: none;
    color: #0070ffbf;
`

export const LoginBoxTransparent = styled.div`
    background: none;
    border: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 35px;
`

export const LoginGoAppStores = styled.div`
    margin-top: 20px;
`

export const LoginGoAppStore = styled.img`
    height: 40px;
`