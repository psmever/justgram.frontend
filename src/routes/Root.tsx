import React, {useEffect, useMemo, useState } from "react";
import { Router, Route} from "react-router-dom";
import Switch from "./Switch";
import {LoadingPage } from "resources/pages";
import useBase from "hooks/useBase";

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

    const CheckProgress = useMemo(() => checkProgress, [checkProgress]); // 진행률.
    const [ isLoading, setIsLoading] = useState(true); // 실제 로팅 페이지 보여 줄껀지에 사용할 스테이트

    useEffect(() => {
        if(CheckProgress === "yet") { // 기본 진행 스테이트가 아직 시작 전에면 체크 훅 사작.
            checkStart();
        }
    });

    // 체크가 모두 끝나고 리덕스 스토어 까지 완료 되었으면 로딩페이지 숨김용 스테이트 업데이트
    useEffect(() => {
        if(checkProgress === "end" && sitedataState === "success") {
            setIsLoading(false);
        }
    }, [checkProgress, sitedataState]);

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