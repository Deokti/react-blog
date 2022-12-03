import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ToastProvider } from 'app/providers/ToastProvider';
import { SidebarProvider } from 'app/providers/SidebarProvider';
import { ErrorBoundary } from './app/providers/ErrorBoundary';
import App from './app/App';
import '@fontsource/roboto';
import 'macro-css';
import 'app/styles/index.scss';
import './shared/config/i18n/i18n';

render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <SidebarProvider>
          <ThemeProvider>
            <ToastProvider>
              <App />
            </ToastProvider>
          </ThemeProvider>
        </SidebarProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
