import { cn } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(cn('someClass')).toBe('someClass');
  });

  test('with additional class', () => {
    const expected = 'someClass class1 class2';
    expect(cn('someClass', ['class1', 'class2']))
      .toBe(expected);
  });

  test('with mods class', () => {
    const expected = 'someClass selected';
    expect(cn('someClass', { selected: true }))
      .toBe(expected);
  });

  test('with only false mods class', () => {
    const expected = 'someClass selected2';
    expect(cn('someClass', { selected: false, selected2: true }))
      .toBe(expected);
  });

  test('with additional and mods class', () => {
    const expected = 'someClass selected2 class1 class2';
    expect(cn(
      'someClass',
      { selected: false, selected2: true },
      ['class1', 'class2'],
    ))
      .toBe(expected);
  });
});
