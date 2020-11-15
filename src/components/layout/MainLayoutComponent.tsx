import React from 'react';
import MainNavigation from "components/common/MainNavigation";
import MainFooter from "components/common/MainFooter";

interface MainLayoutComponentProps  {
    children: any
};

export default function MainLayoutComponent({ children } : MainLayoutComponentProps) {
    return (
        <React.Fragment>
            <MainNavigation/>
            {children}
            <MainFooter/>
        </React.Fragment>
    );
}