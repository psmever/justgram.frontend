import React from 'react';
import EtcHeader from 'components/header/EtcHeader';

interface EtcLayoutComponentsProps  {
    children: any
};

export default function EtcLayoutComponent({ children } : EtcLayoutComponentsProps) {
    return (
        <>
            <EtcHeader/>
                {children}
        </>
    );
}