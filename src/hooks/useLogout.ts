import { useEffect} from "react";
import { removeCookie, getCookie } from "lib/Helper";
import history from 'routes/History';

export default function useLogout() {
    const doLogout = () => {

        const login_state = getCookie("login_state");
        const login_expires_in = getCookie("login_expires_in");
        const login_access_token = getCookie("login_access_token");
        const login_refresh_token = getCookie("login_refresh_token");
        const login_user_name = getCookie("login_user_name");

        if(login_state || login_expires_in || login_access_token || login_refresh_token || login_user_name){
            removeCookie("login_state");
            removeCookie("login_expires_in");
            removeCookie("login_access_token");
            removeCookie("login_refresh_token");
            removeCookie("login_user_name");
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