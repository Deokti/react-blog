import { fireEvent, render, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('render sidebar component', () => {
    render(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('collapsed sidebar', () => {
    render(<Sidebar />);
    const onToggle = screen.getByTestId('on-toggle');
    fireEvent.click(onToggle);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
