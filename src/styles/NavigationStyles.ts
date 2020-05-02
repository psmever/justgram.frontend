import styled, {keyframes} from 'styled-components';
import { Link } from 'react-router-dom';

const NavigationStyle = styled.nav`
    height: 75px;
    background-color: white;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px;
    margin-bottom: 60px;

    @media screen and (min-width: 375px) and (max-width: 667px) {
        padding: 0 20px;
        margin-bottom: 0;
    }
`

const NavigationNavigationColumn = styled.div`
    &:first-child img {
        height: 45px;
    }
`

const NavigationColumn = styled.div`
    position: relative;
`

const NavigationsLinks = styled.ul`
    display: flex;
    padding: 0;
    list-style-type: none;
`

const slideNavLink = keyframes`
    from {
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: none;
    }
`

const NavigationListItem = styled.li`
    margin-left: 30px;
    padding: 0 2px;
    opacity: 0;
    animation: ${slideNavLink} 0.5s ease-out forwards;

    &:nth-child(2) {
        animation-delay: 0.2s;
    }

    &:last-child {
        animation-delay: 0.3s;
    }
`

const NavigationLink = styled(Link)`
    color: rgba(0, 0, 0, 0.8);
    font-size: 18px;
`

export {
    NavigationStyle,
    NavigationNavigationColumn,
    NavigationColumn,
    NavigationsLinks,
    NavigationListItem,
    NavigationLink,
}