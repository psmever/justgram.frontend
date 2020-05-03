import React, { useEffect } from 'react';
import * as Helper from "lib/Helper";
import history from 'routes/History';
import { useDispatch } from 'react-redux';
import { initialLoginInfo } from 'modules/logins';

export default function LogoutPage() {
    const dispatch = useDispatch();

    useEffect(() => {

        const login_state = Helper.cookieManager.get("login_state");
        const login_expires_in = Helper.cookieManager.get("login_expires_in");
        const login_access_token = Helper.cookieManager.get("login_access_token");
        const login_refresh_token = Helper.cookieManager.get("login_refresh_token");
        const login_user_name = Helper.cookieManager.get("login_user_name");

        if(login_state || login_expires_in || login_access_token || login_refresh_token || login_user_name){
            Helper.setLogoutCookie();
            dispatch(initialLoginInfo());

            console.debug('::: logout ok :::');
        }
        history.push(process.env.PUBLIC_URL + '/')

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>

        </>
    );
}