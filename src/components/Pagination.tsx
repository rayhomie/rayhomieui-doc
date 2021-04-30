import React, { FC } from "react";
import { Pagination as RPagination } from "rayhomieui";
import { PaginationProps as RPaginationProps } from "rayhomieui/dist/components/Pagination/Pagination.d";
import "rayhomieui/dist/index.css";

interface PaginationProps extends RPaginationProps {
  /**
   * 每页的条数（大小）
   */
  pageSize: number;
  /**
   * 当前指向的页码，默认1
   */
  current?: number;
  /**
   * 总条数（大小）
   */
  total: number;
  /**
   * 页码变化时回调(参数是下一页的页码)
   */
  onChange?: (next: number) => void;
  /**
   * 是否启用用快速跳转输入框（默认false不启用）
   */
  showQuickJumper?: boolean;
  /**
   * 是否禁用分页（默认false不禁用）
   */
  disabled?: boolean;

  className?: string;
  style?: React.CSSProperties;
}
export const Pagination: FC<PaginationProps> = ({ children, ...props }) => (
  <RPagination {...props}>{children}</RPagination>
);
