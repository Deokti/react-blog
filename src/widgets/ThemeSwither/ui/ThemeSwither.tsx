/* eslint-disable jsx-a11y/label-has-associated-control */
import { useTheme, Theme } from 'app/providers/ThemeProvider';
import { cn } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import ThemeDark from 'shared/assets/icons/theme-dark.svg';
import LightDark from 'shared/assets/icons/theme-light.svg';
import styles from './ThemeSwither.module.scss';

interface ThemeSwitherProps {
  className?: string;
}

export const ThemeSwither = ({ className }: ThemeSwitherProps) => {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === Theme.DARK;

  return (
    <Button
      className={cn(styles.swither, [className])}
      onClick={toggleTheme}
      theme={ButtonTheme.CLEAR}
    >
      <label className={styles.label}>
        <input
          type="checkbox"
          className={styles.checkbox}
          defaultChecked={isDark}
        />
        <div className={styles.div}>
          {isDark ? <ThemeDark width={10} /> : <LightDark width={10} />}
        </div>
      </label>
    </Button>
  );
};
