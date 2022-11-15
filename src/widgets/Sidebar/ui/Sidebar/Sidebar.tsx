import { Theme } from 'app/providers/ThemeProvider';
import { useState } from 'react';
import { cn } from 'shared/lib/classNames';
import { ThemeSwither } from 'widgets/ThemeSwither';
import { AiOutlineRight } from 'react-icons/ai';
import { Button, ButtonTheme } from 'shared/ui/Button';

import { SidebarItemList } from 'widgets/Sidebar/config/sidebarConfig';
import styles from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string;
  theme?: Theme;
}

export const Sidebar = ({ className, theme = Theme.LIGHT }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => setCollapsed((toggle) => !toggle);

  return (
    <div
      data-testid="sidebar"
      className={cn(styles.sidebar, { [styles.collapsed]: collapsed }, [
        className,
        styles[theme],
      ])}
    >

      <ul className={styles.menu}>
        {SidebarItemList.map((item) => (
          <SidebarItem item={item} collapsed={collapsed} />
        ))}
      </ul>

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
