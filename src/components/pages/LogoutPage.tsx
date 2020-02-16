import React, { useEffect } from 'react';
import useLogout from "hooks/useLogout";

export default function LoginPage() {

    const { doLogout } = useLogout();

    useEffect(() => {
        doLogout();
    });

    return (
        <>

        </>
    );
}