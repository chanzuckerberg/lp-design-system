import React, { ReactNode } from "react";

import clsx from "clsx";
import styles from "./typography.module.css";

export type TypographySize =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "body"
  | "sm"
  | "xs"
  | "caption"
  | "overline";

export type TypographyColor =
  | "alert"
  | "base"
  | "brand"
  | "info"
  | "neutral"
  | "success"
  | "warning"
  | "white";

export type TypographyProps<IComponent extends React.ElementType> = {
  /**
   * This prop can be used to specify which element should
   * actually be rendered, in the case that you want to render one HTML element
   * but style it as if it were another. If both an `as` prop
   * and a `size` prop are passed, the `as` will be used to determine the element
   * and the `size` will be used to determine the styling.
   */
  as: IComponent;
  /**
   * The text content to present.
   */
  children: ReactNode;
  /**
   * The color of the text element. If no color provided, defaults to a base color.
   */
  color: TypographyColor;
  /**
   * The size of the html element. If no `as` prop is provided, then
   * the component uses this value to determine which html tag to render
   * (e.g. 'h1', 'h2', etc.)
   */
  size: TypographySize;
  /**
   * Specifies font weight as either bold or normal.
   * TODO: Currently we will allow toggling any size, but in the future
   * we will add stricter enforcement -- e.g. enforcing a boldness
   * for each size or checking for mutually exclusive props.
   */
  weight: "bold" | "normal" | null;
} & React.ComponentProps<IComponent>;

function Typography<IComponent extends React.ElementType>({
  as,
  children,
  color,
  size,
  weight,
  ...rest
}: TypographyProps<IComponent>) {
  const Component = as;
  return (
    <Component
      className={clsx(
        styles.typography,
        // Sizes
        size === "h1" && styles.sizeH1,
        size === "h2" && styles.sizeH2,
        size === "h3" && styles.sizeH3,
        size === "h4" && styles.sizeH4,
        size === "h5" && styles.sizeH5,
        size === "body" && styles.sizeBody,
        size === "sm" && styles.sizeSm,
        size === "xs" && styles.sizeXs,
        size === "caption" && styles.sizeCaption,
        size === "overline" && styles.sizeOverline,
        // Colors
        color === "alert" && styles.colorAlert,
        color === "base" && styles.colorBase,
        color === "brand" && styles.colorBrand,
        color === "info" && styles.colorInfo,
        color === "neutral" && styles.colorNeutral,
        color === "success" && styles.colorSuccess,
        color === "warning" && styles.colorWarning,
        color === "white" && styles.colorWhite,
        // Weights
        weight === "bold" && styles.weightBold,
        weight === "normal" && styles.weightNormal,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}

Typography.defaultProps = {
  weight: null,
  color: "base",
};

export default Typography;
