import { fireEvent, screen } from '@testing-library/react';
import { renderWithRender } from 'shared/lib/tests/renderWithRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('render sidebar component', () => {
    renderWithRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('collapsed sidebar', () => {
    renderWithRender(<Sidebar />);
    const onToggle = screen.getByTestId('on-toggle');
    fireEvent.click(onToggle);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
