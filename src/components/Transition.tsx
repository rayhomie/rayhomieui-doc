import React, { FC } from "react";
import { Transition as RTransition } from "rayhomieui";
import { TransitionProps as RTransitionProps } from "rayhomieui/dist/components/Transition/index.d";
import "rayhomieui/dist/index.css";

interface TransitionProps extends RTransitionProps {
  /**
   * 控制动画
   */
  in: boolean;
  /**
   * 有三种动画可以选择，在<CSSTransition/>的基础上新增加一个字面量属性值
   */
  animation?: "zoom-in-top" | "zoom-in-left" | "zoom-in-bottom";
}
export const Transition: FC<TransitionProps> = ({ children, ...props }) => (
  <RTransition {...props}>{children}</RTransition>
);
