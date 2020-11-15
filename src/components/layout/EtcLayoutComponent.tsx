import React from 'react';
import EtcHeader from 'components/common/EtcHeader';

interface EtcLayoutComponentsProps  {
    children: any
};

export default function EtcLayoutComponent({ children } : EtcLayoutComponentsProps) {
    return (
        <React.Fragment>
            <EtcHeader/>
                {children}
        </React.Fragment>
    );
}