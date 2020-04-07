import React from 'react';
import Spinner from 'react-spinner-material';

/**
 * 런치 스크린용 로딩 페이지.
 */
export default function LoadingPage() {
    return (
        <>
            <Spinner size={30} radius={40} color={"#FF1493"} stroke={2} visible={true} />
        </>
    );
}