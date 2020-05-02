import styled from 'styled-components';

const FooterStyled = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 900px;
    margin: 30px auto;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;

    @media screen and (min-width: 375px) and (max-width: 667px) {
        width: 80%;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

const FooterColumnStyled = styled.div`
    text-align: center;
`;

const FooterCopyrightStyled = styled.span`
    text-align: center;
    color: hsl(0, 0%, 60%);
`;

export {
    FooterStyled,
    FooterColumnStyled,
    FooterCopyrightStyled,
}