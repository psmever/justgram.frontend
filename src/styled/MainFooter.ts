import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 900px;
    margin: 30px auto;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
`

export const FooterColumn = styled.div`
`

export const FooterNav = styled.nav`
`

export const FooterList = styled.ul`
    padding: 0;
    list-style-type: none;
    display: flex;
`

export const FooterListItem = styled.li`
    margin-right: 10px;
`

export const FooterLink = styled(Link)`
    text-decoration: none;
    color: #003569;
`

export const FooterCopyRight = styled.span`
    color: hsl(0, 0%, 60%);
`