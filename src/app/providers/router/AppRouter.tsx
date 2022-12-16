import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loader } from 'shared/ui/Loader';
import { LoaderAlign } from 'shared/ui/Loader/Loader';
import { RequireAuthRoute } from './RequireAuthRoute';
import { routeConfig } from './routeConfig';

export const AppRouter = () => (
  <Suspense fallback={<Loader align={LoaderAlign.CENTER} />}>
    <Routes>
      {Object.values(routeConfig).map(({ path, element, authOnly }) => (
        <Route
          key={path}
          path={path}
          element={authOnly
            ? (
              <RequireAuthRoute>
                <div className="app-inner">
                  {element as JSX.Element}
                </div>
              </RequireAuthRoute>
            )
            : <div className="app-inner">{element}</div>}
        />
      ))}
    </Routes>
  </Suspense>
);
