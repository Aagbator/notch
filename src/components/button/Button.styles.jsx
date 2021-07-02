import styled from "styled-components"

const buttonBackground = (props) => {
    // If no variant is specified, return the primary colour in our theme
    if(!props.variant) return props.theme.dark;
      
    // Dynamically determine the background colour based on props
    let bgColour;
    switch (props.variant) {
      case "primary":
        bgColour = props.theme.primary;
        break;
      case "dark":
        bgColour = props.theme.dark;
        break;
      default:
        bgColour = props.theme.dark;
        break;
    }
    return bgColour;
}

export const StyledButton = styled.button`
  display: block;
  padding: 0 1rem;
  border: none;
  height: 40px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: .2rem;
  color: white;
  cursor: pointer;
  font-weight: 700;
  line-height: 1;
  outline: none;
  text-decoration: none;
  transition: all 0.15s ease;
  white-space: nowrap;
  background-color: ${props => buttonBackground(props)};
  span{
      margin-right: .5rem;
  }
`;

export default StyledButton;