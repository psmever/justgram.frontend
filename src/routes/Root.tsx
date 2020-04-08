import React, {useEffect, useState } from "react";
import { Router, Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
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
                    type={'BallTriangle'}
                    color={'#00BFFF'}
                    height={90}
                    width={90}
                />
            </div>
        );
    } else {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Router history={ Routerhistory }>
                    <Switch>
                        <Route path={process.env.PUBLIC_URL + "/"} exact={ true } component={ LoginPage } />
                        <Route path={process.env.PUBLIC_URL + "/login"} exact={ true } component={ LoginPage } />
                        <Route path={process.env.PUBLIC_URL + "/logout"} exact={ true } component={ LogoutPage } />
                        <Route path={process.env.PUBLIC_URL + "/register"} exact={ true } component={ RegisterPage } />
                        <Route path={process.env.PUBLIC_URL + "/feed"} exact={ true } component={ FeedPage } />
                        <Route path={process.env.PUBLIC_URL + "/post"} exact={ true } component={ PostPage } />
                        <Route path={process.env.PUBLIC_URL + "/explode"} exact={ true } component={ ExplodePage } />

                        <Route path={process.env.PUBLIC_URL + "/:user_name/profile"} exact={ true } component={ ProfilePage } />
                        <Route path={process.env.PUBLIC_URL + "/profile/edit"} exact={ true } component={ EditProfilePage } />

                        <Route path={process.env.PUBLIC_URL + "/:user_name/followers"} exact={ true } component={ FollowersPage } />
                        <Route path={process.env.PUBLIC_URL + "/:user_name/following"} exact={ true } component={ FollowingPage } />

                        <Route path={process.env.PUBLIC_URL + "/main"} exact={ true } component={ FeedPage } />
                        <Route path={process.env.PUBLIC_URL + "/default"} exact={ true } component={ DefaultPage } />
                        <Route path={process.env.PUBLIC_URL + "/test"} exact={ true } component={ TestPage } />
                        <Route path={process.env.PUBLIC_URL + "/test2"} exact={ true } component={ TestPage2 } />
                        <Redirect path="*" to={process.env.PUBLIC_URL + "/login"} />
                    </Switch>
                </Router>
            </BrowserRouter>
        );
    }
}

export default Root;