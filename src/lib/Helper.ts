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