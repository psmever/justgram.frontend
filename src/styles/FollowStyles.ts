import styled from 'styled-components';

const FollowMain = styled.main`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 500px;
`

const FollowUsers = styled.ul`
    background-color: white;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
    width: 100%;
    max-width: 600px;

    @media screen and (min-width: 375px) and (max-width: 667px) {
        background-color: transparent;
        border: 0;
    }
`

const FollowUser = styled.li`
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;

    &:last-child {
        border: 0;
    }

    @media screen and (min-width: 375px) and (max-width: 667px) {
        border: 0;
    }
`

const FollowUserColumn = styled.div`
    display: flex;
    align-items: center;
`

const FollowUserInfo = styled.div`
    margin-left: 15px;
`

const FollowUserAvatar = styled.img`
    width: 55px;
    border-radius: 50%;
`

const FollowUserUserName = styled.span`
    display: block;
    font-weight: 600;
    margin-bottom: 5px;
`
const FollowUserFullUserName = styled.span`
    color: #999;
`

const FollowButton = styled.button`
    background-color: var(--fd-blue);
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

export {
    FollowMain,
    FollowUsers,
    FollowUser,
    FollowUserColumn,
    FollowUserInfo,
    FollowUserUserName,
    FollowUserFullUserName,
    FollowUserAvatar,
    FollowButton,
}