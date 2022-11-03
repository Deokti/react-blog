import { Theme } from 'app/providers/ThemeProvider';
import { cn } from 'shared/lib/classNames';
import { LangSwither } from 'widgets/LangSwither/ui/LangSwither';
import styles from './Header.module.scss';

interface HeaderProps {
  className?: string;
  theme?: Theme;
}

export const Header = ({ className, theme = Theme.LIGHT }: HeaderProps) => (
  <header className={cn(styles.header, [className, styles[theme]])}>
    <LangSwither />
  </header>
);
