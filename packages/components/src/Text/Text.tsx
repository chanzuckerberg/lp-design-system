import React, { forwardRef } from "react";

import Typography, { TypographyProps } from "../common/typography";

type TextElement = "p" | "span";

type Props = {
  /**
   * Controls whether to render text inline (defaults to "p");
   */
  as?: TextElement;
  /**
   * The text content to present.
   */
  children: TypographyProps<TextElement>["children"];
  /**
   * CSS class for custom styles.
   */
  className?: TypographyProps<TextElement>["className"];
  /**
   * The color of the text element. If no color provided, defaults to a base color.
   */
  color?: TypographyProps<TextElement>["color"];
  size: TypographyProps<TextElement>["size"];
  /**
   * Specifies font weight as either bold or normal.
   */
  weight?: TypographyProps<TextElement>["weight"];
  /**
   * Specifies the bottom-margin that should be applied to the typography element.
   * "1x" is an interval of 8px
   */
  spacing?: TypographyProps<TextElement>["spacing"];
};

const Text = forwardRef<HTMLElement, Props>(({ as = "p", children, /**
   * Components that wrap typography sometimes requires props such as event handlers
   * to be passed down into the element. One example is the tooltip component.  It
   * attaches a onHover and onFocus event to the element to determine when to
   * trigger the overlay.
   */ ...rest }: Props, ref) => (
  <Typography as={as} ref={ref} {...rest}>
    {children}
  </Typography>
));

Text.displayName = "Text"; // Satisfy eslint.

export default Text;
