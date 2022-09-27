import { useTheme, Theme } from 'app/providers/ThemeProvider';
import { cn } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button/Button';
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
    <Button className={cn(styles.swither, [className])} onClick={toggleTheme}>
      <label className={styles.label}>
        <input
          type="checkbox"
          className={styles.checkbox}
          defaultChecked={isDark}
        />
        <div className={styles.div}>
          {theme === Theme.LIGHT ? (
            <LightDark width={10} />
          ) : (
            <ThemeDark width={10} />
          )}
        </div>
      </label>
    </Button>
  );
};
