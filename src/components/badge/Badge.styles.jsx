import styled from "styled-components"

const badgeColor = (props) => {
    // If no variant is specified, return the primary colour in our theme
    if(!props.variant) return props.theme.dark;
      
    // Dynamically determine the background colour based on props
    let bgColour, textColour;

    switch (props.variant) {
      case "primary":
        bgColour = props.theme.primary100;
        textColour = props.theme.dark;
        break;
      case "dark":
        bgColour = props.theme.dark100;
        textColour = props.theme.white;
        break;
      case "success":
        bgColour = props.theme.success100;
        textColour = props.theme.dark;
        break;
      case "warning":
        bgColour = props.theme.warning100;
        textColour = props.theme.dark;
        break;
      default:
        bgColour = props.theme.dark100;
        textColour = props.theme.white;
        break;
    }
    return {'bgColor' : bgColour, 'textColor' : textColour};
}

export const StyledBadge = styled.span`
  display: inline-flex;
  justify-content: center;
  align-item: center;
  padding: ${props => !props.rounded ? `.1rem .3rem` : `.1rem 1rem`};
  line-height: 1.6rem;
  border: none;
  box-shadow: 0 1px 3px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: .2rem;
  color: ${props => badgeColor(props).textColor};
  font-size: 1rem;
  font-weight: 700;
  white-space: nowrap;
  background-color: ${props => badgeColor(props).bgColor};
  border-radius: ${props => props.rounded ? `1rem` : `.1rem`};;
`;

export default StyledBadge;