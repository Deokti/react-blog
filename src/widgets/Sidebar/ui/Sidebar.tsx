import { Theme } from 'app/providers/ThemeProvider';
import { useState } from 'react';
import { cn } from 'shared/lib/classNames';
import { ThemeSwither } from 'widgets/ThemeSwither';
import { AiOutlineRight } from 'react-icons/ai';
import { Button, ButtonTheme } from 'shared/ui/Button';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
  theme?: Theme;
}

export const Sidebar = ({ className, theme = Theme.LIGHT }: SidebarProps) => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => setToggle((toggle) => !toggle);

  return (
    <div
      data-testid="sidebar"
      className={cn(styles.sidebar, { [styles.collapsed]: toggle }, [
        className,
        styles[theme],
      ])}
    >
      <ThemeSwither className={styles.themeSwither} />
      <Button
        className={cn(styles.button, [styles[theme]])}
        onClick={onToggle}
        data-testid="on-toggle"
        theme={ButtonTheme.CLEAR}
      >
        <AiOutlineRight size={25} className={styles.icon} />
      </Button>
    </div>
  );
};
