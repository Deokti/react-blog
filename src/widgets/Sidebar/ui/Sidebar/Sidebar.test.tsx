import { screen } from '@testing-library/react';
import { renderWithRender } from 'shared/lib/tests/renderWithRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('render sidebar component', () => {
    renderWithRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
});
