import React from 'react';
import MainHeader from "components/header/MainHeader";

interface MainLayoutComponentProps  {
    children: any
};

export default function MainLayoutComponent({ children } : MainLayoutComponentProps) {
    return (
        <>
            <MainHeader/>
            {children}
        </>
    );
}