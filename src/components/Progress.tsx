import React, { FC } from "react";
import { Progress as RProgress } from "rayhomieui";
import { ProgressProps as RProgressProps } from "rayhomieui/dist/components/Progress/Progress.d";
import "rayhomieui/dist/index.css";

interface ProgressProps extends RProgressProps {
  /**
   * 当前百分百（进度）
   */
  percent: number;
  /**
   * 进度条的高度，默认15
   */
  strokeHeight?: number;
  /**
   * 是否显示百分百，默认true开启
   */
  showText?: boolean;
  /**
   * 默认主题是primary
   */
  theme?: "primary" | "secondary" | "success" | "info" | "warning" | "danger";
  style?: React.CSSProperties;
}
export const Progress: FC<ProgressProps> = ({ children, ...props }) => (
  <RProgress {...props}>{children}</RProgress>
);
