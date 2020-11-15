import styled from 'styled-components';

export const RecommendStyle = styled.main`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 500px;
`

export const RecommendUsers = styled.ul`
    background-color: white;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
    width: 100%;
    max-width: 600px;
`

export const RecommendUser = styled.li`
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;

    &:last-child {
        border: 0;
    }
`

export const RecommendUserColumn = styled.div`
    display: flex;
    align-items: center;
`

export const RecommendUserAvatar = styled.img`
    width: 55px;
    border-radius: 50%;
`

export const RecommendUserInfo = styled.div`
    margin-left: 15px;
`

export const RecommendUserName = styled.span`
    display: block;
    font-weight: 600;
    margin-bottom: 5px;
`

export const RecommendUserFullName = styled.span`
    color: #999;
`

export const RecommendUserColumnButton = styled.button`
    background-color: #3f99ed;
    color: white;
    border: 0;
    font-weight: 600;
    padding: 5px 10px;
    font-size: 14px;
    border-radius: 3px;
    cursor: pointer;

    &:active {
        outline: none;
    }

    &:focus {
        outline: none;
    }

    &:active {
        opacity: 0.9;
    }
`