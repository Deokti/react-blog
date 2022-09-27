import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';
import { routeConfig } from './routeConfig';

export const AppRouter = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      {Object.values(routeConfig).map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={<div className="app-inner">{element}</div>}
        />
      ))}
    </Routes>
  </Suspense>
);
