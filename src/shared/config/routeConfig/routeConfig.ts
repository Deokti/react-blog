import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',

  // LAST
  NOT_FOUND = 'not_found',
}

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
};

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',

  // LAST
  [AppRoutes.NOT_FOUND]: '*',
};
