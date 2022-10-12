import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  test('render button component', () => {
    render(<Button>Текст</Button>);
    expect(screen.getByText('Текст')).toBeInTheDocument();
  });
});
