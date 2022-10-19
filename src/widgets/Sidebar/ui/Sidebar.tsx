import { Theme } from 'app/providers/ThemeProvider';
import { useState } from 'react';
import { cn } from 'shared/lib/classNames';
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
      className={cn(styles.sidebar, { [styles.collapsed]: toggle }, [
        className,
        styles[theme],
      ])}
    >
      <button onClick={onToggle} type="button">onToggle</button>
    </div>
  );
};
