import React, { FC } from "react";
import { Icon as RIcon } from "rayhomieui";
import { IconProps as RIconProps } from "rayhomieui/dist/components/Icon/index.d";
import "rayhomieui/dist/index.css";

interface IconProps extends RIconProps {
  /**
   * 主题分别对应的颜色是：蓝色、灰色、绿色、青色、黄色、红色
   */
  theme?: "primary" | "secondary" | "success" | "info" | "warning" | "danger";
  /**
   * 选择之后的回调：参数是现在的值
   */
  className?: string;
}
export const Icon: FC<IconProps> = ({ children, ...props }) => (
  <RIcon {...props}>{children}</RIcon>
);
