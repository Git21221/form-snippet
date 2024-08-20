import * as React from "react";
import { ReactNode } from "react";
import { Button as MUIButton } from "@mui/material";

type PropsType = {
  content: ReactNode;
  disabled?: boolean;
  href?: string;
  variant?: "text" | "outlined" | "contained";
  size?: "small" | "medium" | "large";
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | string;
  disableElevation?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
};

const Button = ({
  content,
  disabled,
  href,
  variant = "contained",
  size = "medium",
  color = "primary",
  disableElevation,
  startIcon,
  endIcon,
  ...props
}: PropsType) => {
  const isStandardColor = [
    "inherit",
    "primary",
    "secondary",
    "success",
    "error",
  ].includes(color);
  return (
    <MUIButton
      type="submit"
      variant={variant}
      size={size}
      color={isStandardColor ? (color as any) : undefined}
      href={href}
      disabled={disabled}
      disableElevation={disableElevation}
      startIcon={startIcon}
      endIcon={endIcon}
      {...props}
    >
      {content}
    </MUIButton>
  );
};

export { Button };
