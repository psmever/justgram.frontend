import styled from 'styled-components';

export const EditProfileStyle = styled.main`
    display: flex;
    justify-content: center;
`

export const EditProfileContainer = styled.div`
    background-color: white;
    border: 1px solid #e6e6e6;
    width: 100%;
    max-width: 800px;

    padding: 40px 0;
`

export const EditProfileHeader = styled.header`
    display: flex;
    align-items: center;
    margin-bottom: 50px;
`

export const EditProfileAvatarContainer = styled.div`
    width: 200px;
    display: flex;
    justify-content: flex-end;
    margin-right: 35px;
`

export const EditProfileAvatarContainerImage = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
`

export const EditProfileHeaderUserName = styled.h4`
    font-size: 18px;
    font-weight: 600;
`

export const EditProfileForm = styled.div`
    /* margin-left: 235px; */
`

export const EditProfileFormRow = styled.div`
    display: flex;


    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

export const EditProfileFormRowLabel = styled.label`
    width: 200px;
    display: block;
    text-align: right;
    margin-right: 35px;
    font-weight: 600;
    font-size: 16px;

    font-size: 15px;
`

export const EditProfileFormInput = styled.input`
    padding: 8px;
    width: 255px;
    resize: vertical;
    border: 0;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
`

export const EditProfileFormTextarea = styled.textarea`
    padding: 8px;
    width: 255px;
    resize: vertical;
    border: 0;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
`

export const EditProfileFormSelect = styled.select`
    background: 0 0;
    border: 1px solid #efefef;
    border-radius: 3px;
    color: #262626;
    font-size: 16px;
    height: 32px;
    padding: 0 30px 0 10px;
`

export const EditProfileFormButton = styled.button`
    margin-left: 235px;
    border: 0;
    color: white;
    font-weight: 600;
    border-radius: 3px;
    /* background-color: var(--fd-blue); */
    font-size: 14px;
    padding: 7px 25px;
`