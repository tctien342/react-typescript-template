import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import { useDarkMode } from '@hooks/darkmode';
import { useTypedTranslation } from '@languages/typedTranslation';
import { CircularProgress } from '@material-ui/core';
import { appLoaded, loginState } from '@states/app';

import { Manager } from './manager';

/**
 * Code slpiting
 */
const AppPage = lazy(() => import("./pages/app/App"));

interface ILoader {
    mess?: string;
}

const Loader: IComponent<ILoader> = ({ children, mess }) => {
    const loaded = useRecoilValue(appLoaded);
    const { t } = useTypedTranslation();
    if (!loaded) {
        return (
            <div className="vw-100 vh-100 flex justify-center items-center">
                <div className="flex flex-column justify-center items-center animate__animated animate__flash animate__slower ease-in-out infinite">
                    <CircularProgress color="primary"></CircularProgress>
                    <h3 className="blue">{mess || t("LoaderPrepareData")}</h3>
                </div>
            </div>
        );
    }
    return <div>{children}</div>;
};

export function AppRouter () {
    return (
        <div className="absolute flex z-1 w-100 h-100 justify-center items-center pt5--1 pt6-ns pb5-ns pl4-l pr4-l">
            <div className="w-100 h-100 br3-ns overflow-hidden">
                <Router>
                    <Switch>
                        <Route path="/">
                            <></>
                        </Route>
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export function RootRouter () {
    const dark = useDarkMode();
    const { t } = useTypedTranslation();
    const [loaderMess] = useState(t("LoaderPrepareData"));
    const [login] = useRecoilState(loginState);
    return (
        <Router>
            <div className={`fixed top-0 left-0 h-100 w-100 z--1 app__${dark ? "dark" : "light"}`} />
            <Manager>
                <Suspense fallback={<Loader mess="Loading"></Loader>}>
                    <Loader mess={loaderMess}>
                        <Switch>
                            <Route path="/login">
                                {login && <Redirect to="/" />}
                                <AppPage />
                            </Route>
                            <Route path="/">
                                {!login && <Redirect to="/login" />}
                                <AppPage />
                            </Route>
                        </Switch>
                    </Loader>
                </Suspense>
            </Manager>
        </Router>
    );
}
