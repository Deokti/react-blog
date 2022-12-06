import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface RequireAuthRouteProps {
  children: JSX.Element;
}

export const RequireAuthRoute = ({ children }: RequireAuthRouteProps) => {
  const isAuth = useSelector(getUserAuthData);
  const location = useLocation();

  if (!isAuth) {
    return (
      <Navigate
        to={RoutePath.main}
        replace
        state={{ path: location.pathname }}
      />
    );
  }

  return children;
};
