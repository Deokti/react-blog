import { Suspense } from 'react';

import '@fontsource/roboto';
import './styles/index.scss';
import { cn } from 'shared/lib/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/router/AppRouter';
import { useTheme } from './providers/ThemeProvider';
import 'shared/config/i18n/i18n';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={cn('app', [theme])}>
      <Suspense fallback="">
        <Navbar theme={theme} />

        <div className="app-container">
          <Sidebar theme={theme} />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
