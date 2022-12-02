import { useContext } from 'react';
import { LOCAL_STORAGE_SIDEBAR_KEY, SidebarContext } from './SidebarContext';

interface UseThemeResult {
  collapsed: boolean;
  toggleCollapsed: () => void;
}

export const useSidebarCollapsed = (): UseThemeResult => {
  const { collapsed, setCollapsed } = useContext(SidebarContext);

  const toggleCollapsed = () => {
    const newCollapsed = !collapsed;
    if (setCollapsed) {
      setCollapsed(newCollapsed);
    }
    localStorage.setItem(LOCAL_STORAGE_SIDEBAR_KEY, JSON.stringify(newCollapsed));
  };

  return {
    collapsed: collapsed || false,
    toggleCollapsed,
  };
};
