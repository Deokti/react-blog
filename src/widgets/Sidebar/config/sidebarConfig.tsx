import { IconType } from 'react-icons';
import {
  AiOutlineFileSearch,
  AiOutlineHome,
  AiOutlineProfile,
  AiOutlineUser,
} from 'react-icons/ai';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
  name: string;
  path: string;
  Icon: IconType;
  authOnly?: boolean;
}

export const SidebarItemList: SidebarItemType[] = [
  {
    name: 'Главная',
    path: RoutePath.main,
    Icon: AiOutlineHome,
  },
  {
    name: 'О сайте',
    path: RoutePath.about,
    Icon: AiOutlineFileSearch,
  },
  {
    name: 'Профиль',
    path: RoutePath.profile,
    Icon: AiOutlineUser,
    authOnly: true,
  },
  {
    name: 'Статьи',
    path: RoutePath.articles,
    Icon: AiOutlineProfile,
    authOnly: true,
  },
];
