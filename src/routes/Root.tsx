import React, {useEffect, useState } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import useBase from "hooks/useBase";
import { useSelector } from 'react-redux';
import { RootState } from 'modules';
import history from "routes/History";

import {
    LoginPage,
    LogoutPage,
    RegisterPage,
    FeedPage,
    ExplodePage,
    ProfilePage,
    EditProfilePage,
    DefaultPage,
    TestPage,
    TestPage2,
    LoadingPage,
    PostPage,
    FollowersPage,
    FollowingPage
} from "components";

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
            history.push(process.env.PUBLIC_URL + '/profile/edit');
        }

    }, [checkProgress, sitedataState, profile_active]);

    if(isLoading) {
        return (
            <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <LoadingPage
                    size={30}
                    radius={40}
                    color={"#FF1493"}
                    stroke={2}
                    visible={true}
                />
            </div>
        );
    } else {
        return (
            <Router history={ Routerhistory }>
                <Switch>
                    <Route path="/" exact={ true } component={ LoginPage } />
                    <Route path="/login" exact={ true } component={ LoginPage } />
                    <Route path="/logout" exact={ true } component={ LogoutPage } />
                    <Route path="/register" exact={ true } component={ RegisterPage } />
                    <Route path="/feed" exact={ true } component={ FeedPage } />
                    <Route path="/post" exact={ true } component={ PostPage } />
                    <Route path="/explode" exact={ true } component={ ExplodePage } />

                    <Route path="/:user_name/profile" exact={ true } component={ ProfilePage } />
                    <Route path="/profile/edit" exact={ true } component={ EditProfilePage } />

                    <Route path="/:user_name/followers" exact={ true } component={ FollowersPage } />
                    <Route path="/:user_name/following" exact={ true } component={ FollowingPage } />

                    <Route path="/main" exact={ true } component={ FeedPage } />
                    <Route path="/default" exact={ true } component={ DefaultPage } />
                    <Route path="/test" exact={ true } component={ TestPage } />
                    <Route path="/test2" exact={ true } component={ TestPage2 } />
                    <Redirect path="*" to="/login" />
                </Switch>
            </Router>
        );
    }
}

export default Root;