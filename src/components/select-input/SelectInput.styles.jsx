import styled from "styled-components";

const selectInputColor = (props) => {

  // Dynamically determine the background and foreground colour based on props
  let bgColour, foreColour;

  switch (props.variant) {
    case "default":
      bgColour = props.theme.white;
      foreColour = props.theme.dark;
      break;
    case "primary":
      bgColour = props.theme.primary;
      foreColour = props.theme.white;
      break;
    case "dark":
      bgColour = props.theme.dark;
      foreColour = props.theme.white;
      break;
    default:
      bgColour = props.theme.white;
      foreColour = props.theme.dark;
      break;
  }
  return {'bgColor' : bgColour, 'foregroundColor' : foreColour};
}


export const StyledSelectInput = styled.div`
  display: block;
  border: none;
  border-radius: 0.2rem;
  width: 100%;
  cursor: pointer;
  font-weight: 700;
  line-height: 1;
  outline: none;
  text-decoration: none;
  transition: all 0.15s ease;
  white-space: nowrap;
  span {
    margin-right: 0.5rem;
  }
`;

export const StyledSelectWrapper = styled.div`
  position: relative;
  display: block;
  &::after{
    position: absolute;
    content: "";
    top: 14px;
    right: 10px;
    width: 0.5em;
    height: 0.5em;
    border-right: 0.15em solid ${props => selectInputColor(props).foregroundColor};
    border-top: 0.15em solid ${props => selectInputColor(props).foregroundColor};
    transform: rotate(135deg);
    margin-right: 0.5em;

  }
`;

export const StyledSelect = styled.select`
  display: block;
  width: 100%;
  height: 40px;
  padding: 0 10rem 0 1rem;
  font-size: 1.3rem;
  line-height: 1.75;
  font-weight: 700;
  border: 1px solid ${props => props.theme.grey100};
  background-color: ${props => selectInputColor(props).bgColor};
  color: ${props => selectInputColor(props).foregroundColor};
  background-image: none;
  -ms-word-break: normal;
  word-break: normal;
  /* for Firefox */
  -moz-appearance: none;
  /* for Chrome */
  -webkit-appearance: none;
`;

export const StyledSelectLabel = styled.label`
  font-size: 1.1rem;
  font-weight: 600;
  margin: .5rem 0;
  color: ${props => props.theme.grey400};
`;

export default StyledSelectInput;
