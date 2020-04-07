import { useEffect} from "react";
import * as Helper from "lib/Helper";
import history from 'routes/History';

export default function useLogout() {
    const doLogout = () => {

        const login_state = Helper.cookieManager.get("login_state");
        const login_expires_in = Helper.cookieManager.get("login_expires_in");
        const login_access_token = Helper.cookieManager.get("login_access_token");
        const login_refresh_token = Helper.cookieManager.get("login_refresh_token");
        const login_user_name = Helper.cookieManager.get("login_user_name");

        if(login_state || login_expires_in || login_access_token || login_refresh_token || login_user_name){
            Helper.cookieManager.remove("login_state");
            Helper.cookieManager.remove("login_expires_in");
            Helper.cookieManager.remove("login_access_token");
            Helper.cookieManager.remove("login_refresh_token");
            Helper.cookieManager.remove("login_user_name");
            // dispatch(initialLoginInfo());
            window.location.reload();
        } else {
            history.push(process.env.PUBLIC_URL + '/')
        }
    }

    useEffect(() => {
        console.debug("::: logout :::");
    });

    return {
        doLogout,
    }
}