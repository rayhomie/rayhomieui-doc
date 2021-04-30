import React, { FC } from "react";
import { AutoComplete as RAutoComplete } from "rayhomieui";
import { AutoCompleteProps as RAutoCompleteProps } from "rayhomieui/dist/components/AutoComplete/index.d";
import "rayhomieui/dist/index.css";

interface AutoCompleteProps extends RAutoCompleteProps {
  /**
   * 传入自动补全的数据源。
   * 支持传入字符串数组和Promise（结果直接就是一个字符串数组才可以哦）
   */
  fetchSuggestions: (str: string) => string[] | Promise<string[]>;
  /**
   * 选择之后的回调：参数是现在的值
   */
  onSelect?: (item: string) => void;
  /**
   * 列表渲染的方式：参数是每一项的值，返回一个React.ReactElement类型即可
   */
  renderOption?: (item: string) => React.ReactElement;
}
export const AutoComplete: FC<AutoCompleteProps> = ({ children, ...props }) => (
  <RAutoComplete {...props}>{children}</RAutoComplete>
);
