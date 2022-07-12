import { Button as AntButton } from "antd";
import { AnchorButtonProps, NativeButtonProps } from "antd/lib/button/button";
import React, { FC, forwardRef } from "react";

type LinkButtonProps = {
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  children?: React.ReactNode;
  role?: "button" | "link";
} & AnchorButtonProps;

// eslint-disable-next-line react/display-name
export const LinkButton = forwardRef(
  (
    { href, target, type, children, role, ...props }: LinkButtonProps,
    ref: any
  ) => {
    return (
      <AntButton
        {...props}
        type={type}
        role="link"
        href={href}
        ref={ref}
        target={target}
      >
        {children}
      </AntButton>
    );
  }
);

type ButtonProps = {
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  children?: React.ReactNode;
} & NativeButtonProps;

export const Button: FC<ButtonProps> = ({ role, type, ...props }) => {
  return (
    <AntButton {...props} role="button" type={type ?? "primary"}>
      {props.children}
    </AntButton>
  );
};
