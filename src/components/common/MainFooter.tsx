import React from 'react';
import {
    Footer,
    FooterColumn,
    FooterNav,
    FooterList,
    FooterListItem,
    FooterLink,
    FooterCopyRight
} from 'styled/MainFooter';

export default function MainFooter() {
    return (
        <React.Fragment>
            <Footer>
                <FooterColumn>
                    <FooterNav>
                        <FooterList>
                            <FooterListItem><FooterLink to="" onClick={(e) => e.preventDefault()}>Blog Front</FooterLink></FooterListItem>
                            <FooterListItem><FooterLink to="" onClick={(e) => e.preventDefault()}>Blog Backend</FooterLink></FooterListItem>
                        </FooterList>
                    </FooterNav>
                </FooterColumn>
                <FooterColumn>
                    <FooterCopyRight>© 2020 JustGram</FooterCopyRight>
                </FooterColumn>
            </Footer>
        </React.Fragment>
    );
}