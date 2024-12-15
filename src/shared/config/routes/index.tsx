import { RouteProps } from "react-router-dom";
import { Main } from "pages/main";
import { About } from "pages/about";
import { Suspense } from "react";

export enum AppRoutes {
    ROOT = 'root',
    ABOUT = 'about',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.ROOT]: '/',
    [AppRoutes.ABOUT]: 'about'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.ROOT]: {
        path: RoutePath.root,
        element:
            <Suspense fallback={'Loading...'}>
                <Main />
            </Suspense>
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element:
            <Suspense fallback={'Loading...'}>
                <About />
            </Suspense>
    },
}