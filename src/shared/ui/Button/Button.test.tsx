import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Button', () => {
  test('render button component', () => {
    render(<Button>Текст</Button>);
    expect(screen.getByText('Текст')).toBeInTheDocument();
  });

  test('render button with theme', () => {
    render(<Button theme={ButtonTheme.CLEAR}>CLEAR</Button>);
    expect(screen.getByText('CLEAR')).toHaveClass('clear');
  });

  test('render button with theme in Error', () => {
    render(<Button theme={ButtonTheme.ERROR}>ERROR</Button>);
    expect(screen.getByText('ERROR')).toHaveClass('error');
  });
});
