import React from 'react';
import Loader from 'react-loader-spinner'

interface initialProps  {
    type: "Audio" | "BallTriangle" | "Bars" | "Circles" | "Grid" | "Hearts" | "Oval" | "Puff" | "Rings" | "TailSpin" | "ThreeDots" | "Watch" | "RevolvingDot" | "Triangle" | "Plane" | "MutatingDots" | "None" | "NotSpecified" | undefined
    color: string;
    height: number;
    width: number;
};

export default function LoadingPage({type, color, height, width} : initialProps) {
    return (
        <>
            {/* <Spinner size={30} radius={40} color={"#FF1493"} stroke={2} visible={true} /> */}
            {/* <Spinner size={size} radius={radius} color={color} stroke={stroke} visible={visible} /> */}
            <Loader
                type={type}
                color={color}
                height={height}
                width={width}
                timeout={30000} //3 secs
            />
        </>
    );
}