import styled from "styled-components";
import { device } from "../../theme/mediaQueries";

const headerBackground = (props) => {
  // If no variant is specified, return the primary colour in our theme
  if (!props.variant) return props.theme.dark;

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
};

export const StyledWrapper = styled.header`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${(props) => headerBackground(props)};
  padding: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${device.md} {
		// display: block;
		// padding: 0;
	}
`;

export const StyledSVG = styled.svg`
  display: inline-block;
  vertical-align: top;
`;
