/* eslint-disable react/jsx-props-no-spreading */

import { cn } from 'shared/lib/classNames';
import Highlight, { defaultProps } from 'prism-react-renderer';
import themeLight from 'prism-react-renderer/themes/nightOwlLight';
import themeDark from 'prism-react-renderer/themes/nightOwl';
import { Theme } from 'app/providers/ThemeProvider';
import { AiOutlineCopy } from 'react-icons/ai';
import { useCallback, useMemo } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button';
import styles from './Code.module.scss';

interface CodeProps {
  className?: string;
  children: string;
  theme?: Theme;
  afterCopy?: () => void;
}

export const Code = (props: CodeProps) => {
  const {
    className: classProps,
    children,
    theme = Theme.LIGHT,
    afterCopy,
  } = props;

  const currentTheme = useMemo(() => (theme === Theme.LIGHT ? themeLight : themeDark), [theme]);

  const onCopy = useCallback(async () => {
    await navigator.clipboard.writeText(children);

    if (afterCopy) {
      afterCopy();
    }
  }, [afterCopy, children]);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Highlight {...defaultProps} code={children} language="tsx" theme={currentTheme}>
      {({
        className,
        style,
        tokens,
        getLineProps,
        getTokenProps,
      }) => (
        <div className={styles.wrapper}>
          <Button className={styles.copy} theme={ButtonTheme.CLEAR} onClick={onCopy}>
            <AiOutlineCopy size={22} />
          </Button>
          <pre className={cn(styles.Code, [className, classProps])} style={style}>
            {tokens.map((line, i) => (
              <div
                {...getLineProps({
                  line,
                  key: i,
                })}
              >
                {line.map((token, key) => (
                  <span
                    {...getTokenProps({
                      token,
                      key,
                    })}
                  />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  );
};
