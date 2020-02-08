import React, { useEffect } from 'react';
import Spinner from 'react-spinner-material';
// import { useDispatch, useSelector } from 'react-redux';
// import { getRootDataAction } from 'modules/sitedatas';


export default function LoadingPage() {

    // const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(getRootDataAction());
    });

    return (
        <>
            <main id="loading">
                <div className="loading__spinner">
                    <Spinner size={60} spinnerColor={"#FF1493"} spinnerWidth={2} visible={true} />
                </div>
            </main>
        </>
    );
}