import React, { useEffect } from 'react';


export default function TestPage() {

    useEffect(() => {
        console.debug('TestPage');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            TestPage
        </>
    );
}