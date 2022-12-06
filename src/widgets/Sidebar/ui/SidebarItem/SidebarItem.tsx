import { getUserAuthData } from 'entities/User';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { cn } from 'shared/lib/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/config/sidebarConfig';
import styles from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <li
      className={cn(styles.item, {
        [styles.collapsed]: collapsed,
      })}
      title={collapsed ? t(item.name) : ''}
      key={item.path}
    >
      <AppLink to={item.path} className={styles.appLink}>
        <item.Icon className={styles.itemIcon} size={25} />
        <p className={styles.itemText}>
          {t(item.name)}
        </p>
      </AppLink>
    </li>
  );
});
