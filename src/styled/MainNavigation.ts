import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navigation = styled.nav`
    height: 75px;
    background-color: white;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px;
    margin-bottom: 60px;
`

export const NavigationColumn = styled.div`

    position: relative;

    &:first-child img {
        height: 45px;
    }
`

export const NavigationSearch = styled.input`
    padding: 5px 0;
    padding-left: 60px;
    border: 0;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
    background: #fafafa;
    font-size: 16px;

    &:focus {
        outline: none;
        border: 1px solid #a9a9a9;
    }
`

export const NavigationLinks = styled.ul`
    display: flex;
    padding: 0;
    list-style-type: none;
`

export const NavigationListItem = styled.li`
    margin-left: 10px;
    padding: 0 2px;
    /* opacity: 0; */
    animation: slideNavLink 0.5s ease-out forwards;

    &:nth-child(2) {
        animation-delay: 0.2s;
    }

    &:last-child {
        animation-delay: 0.3s;
    }
`

export const NavigationLink = styled(Link)`
    /* color: rgba(0, 0, 0, 0.8); */
    font-size: 18px;
`

export const NavigationAvatar = styled.img`
    width: 25px;
    border-radius: 50%;
`