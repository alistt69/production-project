import { RouteProps } from 'react-router-dom';
import { Main } from 'pages/main';
import { About } from 'pages/about';
import { Profile } from 'pages/profile';
//import { ErrorPage } from "pages/error";

export enum AppRoutes {
  ROOT = 'root',
  ABOUT = 'about',
  PROFILE = 'profile',
  //ERROR = 'error',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.ROOT]: '/',
  [AppRoutes.ABOUT]: 'about',
  [AppRoutes.PROFILE]: 'profile',
  //[AppRoutes.ERROR]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.ROOT]: {
    path: RoutePath.root,
    element: <Main />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <About />,
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <Profile />
  }
  // [AppRoutes.ERROR]: {
  //     path: RoutePath.error,
  //     element: <ErrorPage />
  // }
};
