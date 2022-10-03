import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeContextProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { App } from './app/App';

render(
  <BrowserRouter>
    <ThemeContextProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </ThemeContextProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
