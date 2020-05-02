import styled from 'styled-components';

const EditProfileMain = styled.main`
    display: flex;
    justify-content: center;
`

const EditProfileContainer = styled.div`
    background-color: white;
    border: 1px solid #e6e6e6;
    width: 100%;
    max-width: 800px;
    padding: 40px 0;

    @media screen and (min-width: 375px) and (max-width: 667px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const EditProfileHeader = styled.header`
    display: flex;
    align-items: center;
    margin-bottom: 50px;
`
const EditProfileUsername = styled.h4`
  font-size: 18px;
  font-weight: 600;
`

const EditProfileAvatarContainer = styled.div`
    width: 200px;
    display: flex;
    justify-content: flex-end;
    margin-right: 35px;

    img {
        width: 38px;
        height: 38px;
        border-radius: 50%;
    }

    @media screen and (min-width: 375px) and (max-width: 667px) {
        flex-direction: column;
        width: 0;
    }
`

const EditProfileForm = styled.form`

    @media screen and (min-width: 375px) and (max-width: 667px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
const EditProfileFormRow = styled.div`
    display: flex;
    margin-bottom: 20px;
    display: flex;
    align-items: center;

    @media screen and (min-width: 375px) and (max-width: 667px) {
        flex-direction: column;
    }
`

const EditProfileFormLavel = styled.label`
    width: 200px;
    display: block;
    text-align: right;
    margin-right: 35px;
    font-weight: 600;
    font-size: 16px;
    /* font-size: 15px; */
    /* width: 80%; */

    @media screen and (min-width: 375px) and (max-width: 667px) {
        margin: 0;
        text-align: center;
        margin-bottom: 10px;
    }
`
const EditProfileFormInput = styled.input`
    padding: 8px;
    width: 255px;
    resize: vertical;
    border: 0;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
`
const EditProfileFormTextarea = styled.textarea`
    padding: 8px;
    width: 255px;
    resize: vertical;
    border: 0;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
`

const EditProfileFormLoading = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    margin: 10px auto;
`

const EditProfileFormSubmit = styled.input.attrs({ type: 'submit', value: '저장' })`
    background: #00aec9;
    color: #fff;
    cursor: pointer;
    margin-bottom: 0;
    text-transform: uppercase;
    width: 100%;
    border-radius: 5px;
    height: 35px;
    border-color: transparent;
    box-shadow: 0px;
    outline: none;
    transition: 0.15s;
    text-align: center;
    &:active {
      background-color: #f1ac15;
    }
  `



export {
    EditProfileMain,
    EditProfileContainer,
    EditProfileHeader,
    EditProfileUsername,
    EditProfileAvatarContainer,
    EditProfileForm,
    EditProfileFormRow,
    EditProfileFormInput,
    EditProfileFormTextarea,
    EditProfileFormLavel,
    EditProfileFormLoading,
    EditProfileFormSubmit,

}