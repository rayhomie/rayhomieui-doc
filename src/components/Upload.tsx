import React, { FC } from "react";
import { Upload as RUpload } from "rayhomieui";
import {
  UploadProps as RUploadProps,
  UploadListProps as RUploadListProps,
} from "rayhomieui/dist/components/Upload/index.d";
import { UploadFile } from "rayhomieui/dist/components/Upload/Upload.d";
import "rayhomieui/dist/index.css";

interface UploadProps extends RUploadProps {
  /**
   * 上传文件的地址
   */
  action: string;
  /**
   * 打开就选择的，初始文件列表
   */
  defaultFileList?: UploadFile[];
  /**
   * 上传之前的拦截，返回true则继续，false则跳出，也支持传入Promise对象
   */
  beforeUpload?: (file: UploadFile) => boolean | Promise<UploadFile>;
  /**
   * 可以拿到传文件的过程，可以配合Progress组件一起使用。
   */
  onProgress?: (percentage: number, file: UploadFile) => void;
  /**
   * 弹窗选择文件之后的回调方式
   */
  onChange?: (file: UploadFile) => void;
  /**
   * 上传成功的回调
   */
  onSuccess?: (data: any, file: UploadFile) => void;
  /**
   * 失败的回调
   */
  onError?: (err: any, file: UploadFile) => void;
  /**
   * 把文件从已选择中移除的回调
   */
  onRemove?: (file: UploadFile) => void;
  style?: React.CSSProperties;
  className?: string;
}
export const Upload: FC<UploadProps> & { List: FC<UploadListProps> } = ({
  children,
  ...props
}) => <RUpload {...props}>{children}</RUpload>;
Upload.List = RUpload.List;

interface UploadListProps extends RUploadListProps {
  /**
   * 传入需要删除的文件列表
   */
  fileList: UploadFile[];
  /**
   * 把文件从已选择中移除的回调
   */
  onRemove: (_file: UploadFile) => void;
}

export const UploadList: FC<UploadListProps> = RUpload.List;
