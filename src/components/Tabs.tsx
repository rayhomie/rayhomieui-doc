import React, { FC } from "react";
import { Tabs as RTabs } from "rayhomieui";
import {
  TabsProps as RTabsProps,
  TabItemProps as RTabItemProps,
} from "rayhomieui/dist/components/Tabs/index.d";
import "rayhomieui/dist/index.css";

interface TabsProps extends RTabsProps {
  /**
   * 类型，默认是line
   */
  type?: "line" | "card";
  /**
   * 初始选择的项，默认是0（第一个）
   */
  defaultIndex?: number;
  /**
   * 点击选择之后的回调，参数是选择的项的index
   */
  onSelect?: (selectedIndex: number) => void;
  className?: string;
  style?: React.CSSProperties;
}

export const Tabs: FC<TabsProps> & { Item: FC<TabItemProps> } = RTabs;

Tabs.Item = RTabs.Item;

interface TabItemProps extends RTabItemProps {
  /**
   * 默认是0开始
   */
  index?: number;
  /**
   * 每一项的标题
   */
  labal: any;
  /**
   * 是否禁用，默认false，即不禁用
   */
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
export const TabsItem: FC<TabItemProps> = RTabs.Item;
