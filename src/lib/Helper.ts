/**
 * 개발 디버그
 * @param e
 * @constructor
 */
export const DEBUG = (e: object) => {
    console.debug('%c::DEBUG::', 'color: green; font-weight: bold;',e);
};

/**
 * 로컬 스토리지 관리
 */
export const storageManager = {
    set: (key: string, object: any) => {
        if(!localStorage) return;
        localStorage[key] = (typeof object) === 'string' ? object : JSON.stringify(object);
    },
    get: (key: string) => {
        if(!localStorage) return null;

        if(!localStorage[key]) {
            return null;
        }

        try {
            return JSON.parse(localStorage[key]);
        } catch(e) {
            return localStorage[key];
        }
    },
    remove: (key: string) => {
        if(!localStorage) return null;

        if(localStorage[key]) {
            localStorage.removeItem(key);
        }
    }
};

/**
 * 로컬 스토리지 관리
 */
export const cookieManager = {
    set: (cname: string, cvalue: string, hours: number = 1) => {
        let d = new Date();
        d.setTime(d.getTime() + hours * 60 * 60 * 1000); // (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    },
    get: (cname: string) => {
        let name = cname + "=";
        let ca = document.cookie.split(";");

        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }

        return "";
    },
    remove: (cname: string) => {
        let expires = "expires=Thu, 01 Jan 1970 00:00:00 UTC;"
        document.cookie = cname + "=;" + expires + ";path=/";
    }
};

// 로그인 정보 쿠키에 저장.
export function setLoginCookie(payload: any): void {
    cookieManager.set("login_state", "true");
    cookieManager.set("login_expires_in", payload.expires_in);
    cookieManager.set("login_access_token", payload.access_token);
    cookieManager.set("login_refresh_token", payload.refresh_token);
    cookieManager.set("login_user_name", payload.user_name);
    cookieManager.set("login_profile_active", payload.profile_active);
    cookieManager.set("login_profile_image_url", payload.profile_image_url);
}

export function setLogoutCookie(): void {
    cookieManager.remove("login_state");
    cookieManager.remove("login_expires_in");
    cookieManager.remove("login_access_token");
    cookieManager.remove("login_refresh_token");
    cookieManager.remove("login_user_name");
    cookieManager.remove("login_profile_active");
    cookieManager.remove("login_profile_image_url");
}


export function removeLoginInfo() {
    setLogoutCookie();
}

export function getAccessToken() {
    return cookieManager.get("login_access_token");
}

export function getRefreshToken() {
    return cookieManager.get("login_refresh_token");
}

export function setLoginInfoRefresh(payload: any) {
    setLoginCookie(payload);
}



export const isEmpty = function(value: any){
    if( value === "" || value === null || value === undefined || ( value !== null && typeof value === "object" && !Object.keys(value).length ) ){
      return true
    }else{
      return false
    }
  };