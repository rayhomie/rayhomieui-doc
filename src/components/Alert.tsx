import React, { FC } from "react";
import { Alert as RAlert } from "rayhomieui";
import "rayhomieui/dist/index.css";

interface AlertProps {
  /**
   * 标题（必传参数）
   */
  title: string;
  /**
   * 描述信息
   */
  description?: string;
  /**
   * Alert的类型：分别对应蓝色、绿色、红色、黄色
   */
  alertType?: "default" | "success" | "danger" | "warning";
  /**
   * 控制是否显示，用于受控
   */
  visible: boolean;
  /**
   * 关闭alert时触发的事件
   */
  onClose?: () => void;
  /**
   * 是否显示关闭图标（默认true）
   */
  closeable?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
export const Alert: FC<AlertProps> = ({ children, ...props }) => (
  <RAlert {...props}>{children}</RAlert>
);
