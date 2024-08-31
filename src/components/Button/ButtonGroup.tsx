import * as React from "react";
import { Button, ButtonGroup as MUIButtonGroup } from "@mui/material";

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
  disableElevation?: boolean;
};

const ButtonGroup = ({
  children,
  variant = "contained",
  size = "medium",
  color = "primary",
  orientation,
  disableElevation,
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
      disableElevation={disableElevation}
    >
      {React.Children.map(children, (child) => {
        if (
          React.isValidElement(child) &&
          (child as React.ReactElement).type === Button
        ) {
          // Cast the child to a ReactElement with the correct props type
          const buttonChild = child as React.ReactElement<{
            variant?: "text" | "outlined" | "contained";
          }>;

          console.log(buttonChild.props.variant);
          return React.cloneElement(buttonChild, {
            variant: buttonChild.props.variant || variant,
          });
        }
        return child;
      })}
    </MUIButtonGroup>
  );
};

export { ButtonGroup };
