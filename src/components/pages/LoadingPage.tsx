import React from 'react';
import Spinner from 'react-spinner-material';

interface initialProps  {
    size: number;
    radius: number;
    color: string;
    stroke: number;
    visible: boolean;
};

/**
 * 런치 스크린용 로딩 페이지.
 */
export default function LoadingPage({size, radius, color, stroke, visible} : initialProps) {
    return (
        <>
            {/* <Spinner size={30} radius={40} color={"#FF1493"} stroke={2} visible={true} /> */}
            <Spinner size={size} radius={radius} color={color} stroke={stroke} visible={visible} />
        </>
    );
}