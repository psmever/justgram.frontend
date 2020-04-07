import { useState, useMemo} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules';
import { getCookie } from "lib/Helper";
import {
    checkServer,
    checkNotice
} from "lib/API";
import { ProcessStringStatus } from "modules/types";
import GlobalAlert from "lib/GlobalAlert";
import { getRootDataAction } from "modules/sitedatas";
import { getPostListAction } from "modules/posts";
import { loginLocalinfoToStore } from "modules/logins";

import history from 'routes/History';

export default function useBase() {
    /**
     * 진행중 표시용.
     */
    const [ checkProgress, setCheckProgress ] = useState<ProcessStringStatus>("yet");

    /**
     * 사이트 기본 데이터 리덕스 스토어 연결.
     */
    const sitedata_state = useSelector((state: RootState) => state.sitedata.state);
    const sitedataState = useMemo(() => sitedata_state, [sitedata_state]);

    const dispatch = useDispatch();

    /**
     * 서버 체크.
     */
    const initialCheckServer = async () => {
        const result =  await checkServer();
        return result.state;
    }

    /**
     * 기본 공지 사항 체크
     */
    const initialCheckNotice = async () => {
        const result = await checkNotice();
        if(result.data?.notice_exits === true) {
            GlobalAlert.default({
                text: result.data.notice
            });
        }
    }

    /**
     * 사이트 기본 정보 가지고 오는 사가 액션 콜.
     */
    const initialGetSiteData = async () => {
        if(sitedataState === "yet") {
            dispatch(getRootDataAction());
        }
    }


    const initialGetPostList = async () => {
        if(sitedataState === "yet") {
            dispatch(getPostListAction());
        }
    }



    /**
     * 로그인 정보가 없을떄 쿠키 로그인 체크후 로그인 사가 연결.
     */
    const initialLocalLoginInfo = async () => {
        const login_state = getCookie("login_state");
        const login_expires_in = getCookie("login_expires_in");
        const login_access_token = getCookie("login_access_token");
        const login_refresh_token = getCookie("login_refresh_token");
        const login_user_name = getCookie("login_user_name");
        const login_profile_active = getCookie("login_profile_active");

        if(login_state === "true") {
            dispatch(loginLocalinfoToStore({
                state: "yet",
                expires_in: Number(login_expires_in),
                access_token: login_access_token,
                refresh_token: login_refresh_token,
                user_name: login_user_name,
                profile_active: login_profile_active,
            }));

            //TODO: 로그인 완료후..??
            if(login_profile_active === "Y") {
                history.push(process.env.PUBLIC_URL + '/feed');
            } else {
                history.push(process.env.PUBLIC_URL + "/profile/edit");
            }

        }
    }

    /**
     * 전체 체크 시작 함수 콜 및 진행 사항 스테이트 셋
     */
    const initialCheckStart = async () => {
        const result = await initialCheckServer();
        if(result === true) {
            await initialCheckNotice();
            await initialGetSiteData();
        } else {
            // TODO: 처리 횟수 제한 걸렸을떄???

            GlobalAlert.default({
                text: "처리 도중 문제가 발생했습니다."
            });

        }
        await initialLocalLoginInfo();
        await initialGetPostList();
        setCheckProgress("end");
    }

    /**
     * 전체 체크 시작용.
     */
    const checkStart = () => {
        setCheckProgress("processing");
        initialCheckStart();
        // setCheckProgress("end");
    }

    return {
        checkProgress, // 기본 진행 표시용
        sitedataState, // 사가 스토어 상태
        checkStart // 체크 시작 함수.
    };
}