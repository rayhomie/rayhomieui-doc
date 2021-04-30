import React, { FC } from "react";
import { Input as RInput } from "rayhomieui";
import { InputProps as RInputProps } from "rayhomieui/dist/components/Input/index.d";
import "rayhomieui/dist/index.css";

interface InputProps extends RInputProps {
  /**
   * 添加前缀 用于配置一些固定组合
   */
  prepend?: string | React.ReactElement;
  /**
   * 添加后缀 用于配置一些固定组合
   *
   */
  append?: string | React.ReactElement;
  /**
   * 添加图标，在右侧悬浮添加一个图标，用于提示。
   * 支持fontawesome的所有icon名字https://fontawesome.com/how-to-use/on-the-web/using-with/react
   */
  icon?: string | any;
  /**
   *是否禁用 Input
   */
  disabled?: boolean;
  /**
   * 设置 input 大小，支持 lg 或者是 sm
   */
  size?: "lg" | "sm";
  /**
   * 监听输入框改变（默认是sm）
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  style?: React.CSSProperties;
}

export const Input: FC<InputProps> = ({ children, ...props }) => (
  <RInput {...props}>{children}</RInput>
);
