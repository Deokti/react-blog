import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (Component: Story) => (
  <div className={`app ${theme}`}>
    <Component />
  </div>
);
