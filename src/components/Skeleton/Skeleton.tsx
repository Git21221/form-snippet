import * as React from "react";
import { Skeleton as MUISkeleton } from "@mui/material";
import "./Skeleton.css";

/**
 * @typedef {Object} SkeletonProps
 * @property {"circle" | "box" | "text"} [variant] - The variant of the Skeleton component.
 * @property {"small" | "medium" | "large"} [size] - The size of the Skeleton.
 * @property {number} [width] - The width of the Skeleton component.
 * @property {number} [height] - The height of the Skeleton component.
 * @property {number} [animationDuration] - The duration of the animation for the Skeleton component.
 * @property {"wave" | "pulse"} [animation] - The type of animation.
 * @property {number} [borderRadius] - The border radius of the Skeleton component.
 * @property {[string]} [gradientColors] - The gradient colors of the Skeleton component.
 * @property {string} [backgroundColor] - The background color of the Skeleton component.
 * @returns {JSX.Element} - The JSX element of the Skeleton component.
 **/

export type SkeletonProps = {
  variant?: "text" | "rectangular" | "rounded" | "circular";
  size?: "small" | "medium" | "large";
  width?: number;
  height?: number;
  animationDuration?: number;
  animation?: "wave" | "pulse";
  borderRadius?: number;
  gradientColors?: string[];  
  backgroundColor?: string;
};

const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  animationDuration,
  variant = "rounded",
  size = "medium",
  animation,
  borderRadius = 25,
  gradientColors = ["#f0f0f0", "#e0e0e0", "#f0f0f0"], 
  backgroundColor = "lightgrey", 
  ...rest
}: SkeletonProps) => {
  const sizeStyles =
    size === "small"
      ? { width: 40, height: 40 }
      : size === "large"
      ? { width: 120, height: 120 }
      : { width: 80, height: 80 };

  const animationStyles =
    animation === "wave"
      ? {
          background: `linear-gradient(90deg, ${gradientColors[0]} 25%, ${gradientColors[1]} 50%, ${gradientColors[2]} 75%)`,
          backgroundSize: "200% 100%",
        }
      : { backgroundColor };
    animation === "pulse"
     ? {
        background: `linear-gradient(90deg, ${gradientColors[0]} 25%, ${gradientColors[1]} 50%, ${gradientColors[2]} 75%)`,
      }
     : { backgroundColor };
  return (
    <MUISkeleton
      variant={variant}
      width={width || sizeStyles.width}
      height={height || sizeStyles.height}
      animation={animation === "wave" ? "wave" : false}
      className={`skeleton ${animation === "pulse" ? "pulse-animation" : ""} ${
        animation === "wave" ? "wave-animation" : ""
      }`}
      sx={{
        animationDuration: `${animationDuration}ms`,
        ...animationStyles, 
        ...rest,
      }}
    />
  );
};

export {Skeleton};
