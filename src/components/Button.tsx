import React, { FC } from "react";
import { Button as RButton } from "rayhomieui";
import { ButtonProps as RButtonProps } from "rayhomieui/dist/components/Button/index.d";
import "rayhomieui/dist/index.css";

interface ButtonProps extends RButtonProps {
  /**
   * 类型，颜色分别为蓝色、白色（默认）、红色、灰色
   */
  btnType?: "primary" | "default" | "danger" | "link";
  /**
   * 默认是中号（不填就是默认尺寸）
   */
  size?: "lg" | "sm";
  /**
   * 是否禁用（默认不禁用）
   */
  disabled?: boolean;
  /**
   * 当btnType为link时的跳转地址
   */
  href?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}
export const Button: FC<ButtonProps> = ({ children, ...props }) => (
  <RButton {...props}>{children}</RButton>
);
