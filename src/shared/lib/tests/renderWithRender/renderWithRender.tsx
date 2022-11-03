import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18Mock from 'shared/config/i18n/i18nMockTest';

export const renderWithRender = (component: ReactNode) => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <I18nextProvider i18n={i18Mock}>
        {component}
      </I18nextProvider>
    </MemoryRouter>,
  );
};
