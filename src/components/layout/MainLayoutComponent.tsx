import React from 'react';
import MainHeader from "components/common/MainHeader";
import MainFooter from "components/common/MainFooter";

interface MainLayoutComponentProps  {
    children: any
};

export default function MainLayoutComponent({ children } : MainLayoutComponentProps) {
    return (
        <React.Fragment>
            <MainHeader/>
            {children}
            <MainFooter/>
        </React.Fragment>
    );
}