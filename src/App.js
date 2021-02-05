/**
 * Entry application component used to compose providers and render Routes.
 * */

import React, { useEffect } from "react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {PersistGate} from "redux-persist/integration/react";
import {LastLocationProvider} from "react-router-last-location";
import {Routes} from "./app/router/Routes";
import {I18nProvider, LayoutSplashScreen, ThemeProvider} from "./_metronic";
import socketIOClient from "socket.io-client";
import * as detect from "./app/store/ducks/detect.duck";
import {BASE_URL} from "./app/config/websocket";

export default function App({store, Layout, persistor, basename}) {

    useEffect(() => {
        const socket = socketIOClient(BASE_URL, {transports: ['websocket']});
        socket.on("result", message => {
            let data = JSON.parse(message)
            let demo = detect.actions.DetectImage('data:image/png;base64,' + data.imagedata)
            store.dispatch(demo)
        }, []);
    
    });

    return (
        /* Provide Redux store */
        <Provider store={store} loading={<LayoutSplashScreen/>}>
            {/* Asynchronously persist redux stores and show `SplashScreen` while it's loading. */}
            <PersistGate persistor={persistor}>
                {/* Add high level `Suspense` in case if was not handled inside the React tree. */}
                <React.Suspense fallback={<LayoutSplashScreen/>}>
                    {/* Override `basename` (e.g: `homepage` in `package.json`) */}
                    <BrowserRouter basename={basename}>
                        {/*This library only returns the location that has been active before the recent location change in the current window lifetime.*/}
                        <LastLocationProvider>
                            {/* Provide Metronic theme overrides. */}
                            <ThemeProvider>
                                {/* Provide `react-intl` context synchronized with Redux state.  */}
                                <I18nProvider>
                                    {/* Render routes with provided `Layout`. */}
                                    <Routes Layout={Layout}/>
                                </I18nProvider>
                            </ThemeProvider>
                        </LastLocationProvider>
                    </BrowserRouter>
                </React.Suspense>
            </PersistGate>
        </Provider>
    );
}
