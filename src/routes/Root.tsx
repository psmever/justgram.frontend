import React, {useEffect, useState } from "react";
import { Router, Route} from "react-router-dom";
import Switch from "./Switch";
import {LoadingPage } from "resources/pages";
import useBase from "hooks/useBase";
import { useSelector } from 'react-redux';
import { RootState } from 'modules';
import history from "routes/History";

interface RootProps  {
    Routerhistory: any
};

const Root = ({
    Routerhistory
} : RootProps) => {

    const {
        checkProgress,
        sitedataState,
        checkStart,
    } = useBase(); // 시스템 체크 용 훅 연결.

    // const CheckProgress = useMemo(() => checkProgress, [checkProgress]); // 진행률.
    const [ isLoading, setIsLoading] = useState(true); // 실제 로딩 페이지 보여 줄껀지에 사용할 스테이트

    const profile_active = useSelector((state: RootState) => state.login_state.profile_active);

    useEffect(() => {
        checkStart();

        //TODO: 에디에서 에러나서??
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // 체크가 모두 끝나고 리덕스 스토어 까지 완료 되었으면 로딩페이지 숨김용 스테이트 업데이트
    useEffect(() => {
        if(checkProgress === "end" || sitedataState === "success") {
            setIsLoading(false);
        }

        if(profile_active === "N") {
            history.push('/profile/edit');
        }
    }, [checkProgress, sitedataState, profile_active]);

    if(isLoading) {
        return (
            <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
                <LoadingPage/>
            </div>
        );
    } else {
        return (
            <Router history={ Routerhistory }>
                <Route component={ Switch } />
            </Router>
        );
    }
}

export default Root;