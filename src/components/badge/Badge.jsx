import React from 'react';
import { oneOf, node, bool } from 'prop-types';
import StyledBadge from "./Badge.styles.jsx"

export const Badge = ({ rounded, variant, children, ...props}) => {

  return (
    <StyledBadge
      rounded={rounded}
      variant={variant}
      {...props}
    >
      {children}
    </StyledBadge>
  );
};

Badge.propTypes = {
  /**
   * is badge rounded?
   */
   rounded: bool,
  /**
   * What color should the button be?
   */
  variant: oneOf(['success', 'warning', 'dark', 'primary']),
  /**
   * Badge content
   */
  children: node.isRequired,
};

Badge.defaultProps = {
  variant: 'dark',
  children: 'badge',
};
