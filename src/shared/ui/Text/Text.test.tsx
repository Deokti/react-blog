import { render, screen } from '@testing-library/react';
import {
  Text, TextSize, TextTag, TextTheme, TextWeight,
} from './Text';

describe('Text', () => {
  test('render button component', () => {
    render(<Text>Текст</Text>);
    expect(screen.getByText('Текст')).toBeInTheDocument();
  });

  test('render button component with P tag', () => {
    render(<Text tag={TextTag.P}>Текст</Text>);
    expect(screen.getByText('Текст').tagName).toBe('P');
  });

  test('render button with size L', () => {
    render(<Text size={TextSize.L}>Текст</Text>);
    expect(screen.getByText('Текст')).toHaveClass('l');
  });

  test('render button with size BOLD wight', () => {
    render(<Text weight={TextWeight.BOLD}>Текст</Text>);
    expect(screen.getByText('Текст')).toHaveClass('bold');
  });

  test('render button with all props', () => {
    render(
      <Text
        theme={TextTheme.ERROR}
        className="testClass"
        size={TextSize.SM}
        tag={TextTag.SPAN}
        weight={TextWeight.MEDIUM}
      >
        Текст
      </Text>,
    );
    expect(screen.getByText('Текст').tagName).toBe('SPAN');
    expect(screen.getByText('Текст')).toHaveClass('testClass sm medium');
  });
});
