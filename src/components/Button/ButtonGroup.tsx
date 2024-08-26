import * as React from "react";
import { ButtonGroup as MUIButtonGroup } from "@mui/material";

/**
 * @typedef {Object} ButtonGroupProps
 * @property {React.ReactNode | React.ReactNode[]} children - The content of the ButtonGroup component
 * @property {"text" | "outlined" | "contained"} [variant] - The variant of the ButtonGroup component
 * @property {"small" | "medium" | "large"} [size] - The size of the ButtonGroup component
 * @property {"inherit" | "primary" | "secondary" | "success" | "error" | string} [color] - The color of the ButtonGroup component
 * @property {"horizontal" | "vertical"} [orientation] - The orientation of the ButtonGroup component
 * @returns {JSX.Element} - The JSX element of the ButtonGroup component
 */

type PropsType = {
  children: React.ReactNode | Array<React.ReactNode>;
  variant?: "text" | "outlined" | "contained";
  size?: "small" | "medium" | "large";
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | string;
  orientation?: "horizontal" | "vertical";
};

const ButtonGroup = ({
  children,
  variant = "contained",
  size = "medium",
  color = "primary",
  orientation,
}: PropsType) => {
  const isStandardColor = [
    "inherit",
    "primary",
    "secondary",
    "success",
    "error",
  ].includes(color);
  return (
    <MUIButtonGroup
      variant={variant}
      size={size}
      color={isStandardColor ? (color as any) : undefined}
      orientation={orientation}
    >
      {children}
    </MUIButtonGroup>
  );
};

export { ButtonGroup };
