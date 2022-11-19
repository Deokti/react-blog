import { render } from 'react-dom';
import { StoreProvider } from 'app/providers/StoreProvider';
import { BrowserRouter } from 'react-router-dom';
import { ThemeContextProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { App } from './app/App';
import '@fontsource/roboto';
import 'app/styles/index.scss';

render(
  <BrowserRouter>
    <StoreProvider>
      <ThemeContextProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </ThemeContextProvider>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
