import { createContext } from 'react';

export interface SidebarContext {
  collapsed?: boolean
  setCollapsed?(collapsed: boolean): void;
}

// eslint-disable-next-line no-redeclare
export const SidebarContext = createContext<SidebarContext>({});

export const LOCAL_STORAGE_SIDEBAR_KEY = 'sidebar-collapsed';
