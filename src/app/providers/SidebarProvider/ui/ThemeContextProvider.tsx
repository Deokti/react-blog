import { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_SIDEBAR_KEY, SidebarContext } from '../lib/SidebarContext';

const defaultCollapsed = JSON
  .parse(localStorage.getItem(LOCAL_STORAGE_SIDEBAR_KEY) || 'false');

export const SidebarProvider: FC = ({ children }) => {
  const [collapsed, setCollapsed] = useState<boolean>(defaultCollapsed);

  const value = useMemo(() => ({ collapsed, setCollapsed }), [collapsed]);

  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  );
};
