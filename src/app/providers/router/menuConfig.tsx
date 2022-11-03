import { IconType } from 'react-icons';
import { AiOutlineFileSearch, AiOutlineHome } from 'react-icons/ai';
import { AppMenu } from 'shared/config/menuConfig/menuConfig';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface AppMenuItem {
  name: AppMenu;
  path: string;
  Icon: IconType;
}

export const menuConfig: Record<AppMenu, AppMenuItem> = {
  [AppMenu.MAIN]: {
    name: AppMenu.MAIN,
    path: RoutePath.main,
    Icon: AiOutlineHome,
  },
  [AppMenu.ABOUT]: {
    name: AppMenu.ABOUT,
    path: RoutePath.about,
    Icon: AiOutlineFileSearch,
  },
};
