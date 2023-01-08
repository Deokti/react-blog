import { Theme } from 'app/providers/ThemeProvider';
import { memo } from 'react';
import { cn } from 'shared/lib/classNames';
import { ThemeSwither } from 'widgets/ThemeSwither';
import { AiOutlineRight } from 'react-icons/ai';
import { Button, ButtonTheme } from 'shared/ui/Button';

import { SidebarItemList } from 'widgets/Sidebar/config/sidebarConfig';
import { useSidebarCollapsed } from 'app/providers/SidebarProvider';
import styles from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string;
  theme?: Theme;
}

export const Sidebar = memo(({
  className,
  theme = Theme.LIGHT,
}: SidebarProps) => {
  const {
    collapsed,
    toggleCollapsed,
  } = useSidebarCollapsed();

  const additional = [
    className,
    styles[theme],
  ];
  const mods = {
    [styles.collapsed]: collapsed,
  };

  return (
    <>
      <div className={cn(styles.sidebarEmpty, mods)} />
      <div
        data-testid="sidebar"
        className={cn(styles.sidebar, mods, additional)}
      >
        <ul className={styles.menu}>
          {SidebarItemList.map((item) => (
            <SidebarItem item={item} collapsed={collapsed} key={item.path} />
          ))}
        </ul>

        <ThemeSwither className={styles.themeSwitcher} />
        <Button
          className={cn(styles.button, [styles[theme]])}
          onClick={toggleCollapsed}
          data-testid="on-toggle"
          theme={ButtonTheme.CLEAR}
        >
          <AiOutlineRight size={25} className={styles.icon} />
        </Button>
      </div>
    </>
  );
});
