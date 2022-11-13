import { createElement } from 'react';
import { cn } from 'shared/lib/classNames';
import styles from './Text.module.scss';

export enum TextTheme {
  DEFAULT = 'default',
  ERROR = 'error',
}

export enum TextTag {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  P = 'p',
  SPAN = 'span',
}

export enum TextSize {
  SM = 'sm',
  M = 'm',
  L = 'l'
}

export enum TextWeight {
  LIGHT = 'light', // 300
  REGULAR = 'regular', // 400
  MEDIUM = 'medium', // 500
  SEMI_BOLD = 'semi_bold', // 600
  BOLD = 'bold', // 700
  EXTRA_BOLD = 'extra_bold', // 800
  BLACK = 'black' // 900
}

export enum TextAlight {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center',
}

export interface TextProps {
  className?: string;
  theme?: TextTheme;
  children: string;
  tag?: TextTag;
  size?: TextSize;
  weight?: TextWeight;
  align?: TextAlight;
}

export const Text = (props: TextProps) => {
  const {
    className,
    children,
    weight,
    size,
    theme = TextTheme.DEFAULT,
    tag = TextTag.P,
    align = TextAlight.LEFT,
  } = props;

  const additional = [
    className,
    styles[theme],
    styles[size],
    styles[weight],
    styles[align],
  ];

  return createElement(
    tag,
    {
      className: cn(
        styles.text,
        additional,
      ),
    },
    children,
  );
};
