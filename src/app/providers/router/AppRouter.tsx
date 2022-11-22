import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loader } from 'shared/ui/Loader';
import { routeConfig } from './routeConfig';

export const AppRouter = () => (
  <Suspense fallback={<Loader isCenter />}>
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
