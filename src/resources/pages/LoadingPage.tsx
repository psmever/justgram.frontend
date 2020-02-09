import React from 'react';
import Spinner from 'react-spinner-material';

/**
 * 런치 스크린용 로딩 페이지.
 */
export default function LoadingPage() {
    return (
        <Spinner size={30} spinnerColor={"#FF1493"} spinnerWidth={2} visible={true} />
    );
}