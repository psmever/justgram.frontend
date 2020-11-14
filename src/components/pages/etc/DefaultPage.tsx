import React, { useEffect } from 'react';

export default function DefaultPage() {

    useEffect(() => {
        console.debug('DefaultPage');
     // // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []);

    return (
        <>
            DefaultPage
        </>
    );
}