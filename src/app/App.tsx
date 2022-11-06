import { Suspense } from 'react';

import { cn } from 'shared/lib/classNames';
import { Header } from 'widgets/Header';
import { Sidebar } from 'widgets/Sidebar';
import { PageLoader } from 'widgets/PageLoader';
import { AppRouter } from './providers/router/AppRouter';
import { useTheme } from './providers/ThemeProvider';
import 'shared/config/i18n/i18n';

// eslint-disable-next-line no-console
console.log('[__IS_DEV__]', __IS_DEV__);

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={cn('app', [theme])}>
      <Suspense fallback={<PageLoader />}>
        <Header theme={theme} />

        <div className="app-container">
          <Sidebar theme={theme} />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
