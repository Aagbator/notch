import React from 'react';
import { oneOf, func, node } from 'prop-types';
import StyledButton from "./Button.styles.jsx"

 const buttonIcon = (icon) => {
  // If no icon is specified, return empty
  if(!icon) return '';
    
  let iconType;
  switch (icon) {
    case "expand":
      iconType = '+';
      break;
    case "close":
      iconType = 'x';
      break;
    default:
      iconType = '';
      break;
  }
  return iconType;
}

export const Button = ({ icon, variant, children, onClick, ...props}) => {

  return (
    <StyledButton
      type="button"
      variant={variant}
      onClick={onClick}
      {...props}
    >
      <span>{buttonIcon(icon)}</span>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  /**
   * How large should the button be?
   */
   icon: oneOf(['expand', 'close']),
  /**
   * What color should the button be?
   */
  variant: oneOf(['primary', 'dark']),
  /**
   * Button content
   */
  children: node.isRequired,
  /**
   * Optional click handler
   */
  onClick: func,
};

Button.defaultProps = {
  icon: 'close',
  variant: 'dark',
  children: 'button',
};
