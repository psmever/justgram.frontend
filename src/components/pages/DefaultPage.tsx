import React, { useEffect } from 'react';
import history from 'modules/History';

export default function DefaultPage() {

    useEffect(() => {
        console.debug(history);
     // // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []);

    return (
        <>
            DefaultPage
        </>
    );
}