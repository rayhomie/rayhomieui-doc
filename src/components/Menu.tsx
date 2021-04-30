import React, { FC } from "react";
import { Menu as RMenu } from "rayhomieui";
import {
  MenuProps as RMenuProps,
  MenuItemProps as RMenuItemProps,
  SubMenuProps as RSubMenuProps,
} from "rayhomieui/dist/components/Menu/index.d";
import "rayhomieui/dist/index.css";

interface MenuProps extends RMenuProps {
  /**
   * 默认是水平的
   */
  mode?: "horizontal" | "vertical";
  /**
   * 初始的选择项，不填，值为 '0'（即第一项）
   */
  defaultIndex?: string;
  /**
   * 选择之后的回调，参数是选择的index（index都是从'0'开始）
   */
  onSelect?: (selectedIndex: string) => void;
  /**
   * 子元素只能是<Menu.Item/>或者<Menu.SubMenu/>，否则会导致不可预测的错误
   */
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

interface MenuItemProps extends RMenuItemProps {
  /**
   * 每个Menu.Item设置有不同的索引值
   */
  index?: string;
  /**
   * 与同级的<Menu.SubMenu/>的title属性功能一致
   */
  children?: React.ReactNode;
  /**
   * 是否禁用，默认false
   */
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
interface SubMenuProps extends RSubMenuProps {
  /**
   * 每个Menu.SubMenu设置有不同的索引值
   */
  index?: string;
  /**
   * 与同级的<Menu.Item/>标签的children属性功能一致
   */
  title: string;
  className?: string;
}

export const Menu: FC<MenuProps> & {
  Item: FC<MenuItemProps>;
  SubMenu: FC<SubMenuProps>;
} = RMenu;

Menu.Item = RMenu.Item;
Menu.SubMenu = RMenu.SubMenu;
//为了实现导出props
export const MenuItem: FC<MenuItemProps> = RMenu.Item;
export const SubMenu: FC<SubMenuProps> = RMenu.SubMenu;
