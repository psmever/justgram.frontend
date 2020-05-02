import styled, {keyframes} from 'styled-components';

const FollowersMain = styled.main`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 500px;
`

const FollowersUsers = styled.ul`
    background-color: white;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
    width: 100%;
    max-width: 600px;
`

const FollowersUser = styled.li`
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;

    &:last-child {
        border: 0;
    }
`

const FollowersUserColumn = styled.div`
    display: flex;
    align-items: center;
`

const FollowersUserInfo = styled.div`
    margin-left: 15px;
`

const FollowersUserAvatar = styled.img`
    width: 55px;
    border-radius: 50%;
`

const FollowersUserUserName = styled.span`
    display: block;
    font-weight: 600;
    margin-bottom: 5px;
`
const FollowersUserFullUserName = styled.span`
    color: #999;
`

const FollowersButton = styled.button`
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
    FollowersMain,
    FollowersUsers,
    FollowersUser,
    FollowersUserColumn,
    FollowersUserInfo,
    FollowersUserUserName,
    FollowersUserFullUserName,
    FollowersUserAvatar,
    FollowersButton,
}