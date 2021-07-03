import styled, { css, keyframes } from "styled-components";
import { device } from "../../theme/mediaQueries";


export const Banner = styled.header`
  background-color: ${(props) => props.theme.offWhite};
  padding: 2rem;
  display: flex;
  // align-content: flex-end;
  // justify-content: end;
  @media ${device.md} {
    padding: 5rem;
	}
`;

export const FormWrapper = styled.div`
  display: flex;
  flex: 0 1 100%;
  flex-direction: column;
  justify-content: space-between;
  min-height: 35vh;
  
  @media ${device.md} {
    min-height: 10vh;
    flex-direction: row;
    flex: 0 1 70%;
    justify-content: space-between;
    align-content: flex-end;
    align-items: flex-end;
	}
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex: 0 1 40%;
`;

export const Mainsection = styled.div`
  background-color: ${(props) => props.theme.white};
  padding: 2rem;
  display: flex;
  @media ${device.md} {
    padding: 5rem;
	}
`;

export const Table = styled.div`
  width: 100%;
`;

const rowStyles = css`
  border-radius: 3px;
  display: block;
  @media ${device.sm} {
    display: flex;
    justify-content: space-between;
  }
`

export const TableHeader = styled.div`
  display: none;
  @media ${device.sm} {
    padding: 1rem 2rem;
    box-shadow: 0px 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    font-size: 1.3rem;
    text-transform: uppercase;
    margin-bottom: .5rem;
    font-weight: 700;
    color: ${props => props.theme.dark};
    ${rowStyles};
	}
`;

export const TableRow = styled.div`
  color: ${props => props.theme.dark100};
  padding: 0rem 2rem;
  background-color: ${props => props.theme.white};
  border-bottom: 2px solid ${props => props.theme.offWhite};
  ${rowStyles};

  @media ${device.md} {
    font-size: 1.2rem;
	}
`;

export const TableCol = styled.div`
flex-basis: 70%;
display: flex;
padding: 10px 0;
color:  ${props => props.theme.dark};
&::before {
  color:  ${props => props.theme.dark100};
  padding-right: 10px;
  content: attr(data-label);
  flex-basis: 30%;
  text-align: left;
  @media ${device.md} {
    display: none;
  }
}
@media ${device.md} {
  flex-basis: ${props => props.width ? `${props.width}%` : '100%'};
}
`

export const Loader = styled.div`
  display: flex;
  background:  ${props => props.width}
  display: flex;           
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
  height: 100vh;
`;


const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid ${props => props.theme.primary};
  border-right: 2px solid ${props => props.theme.primary};
  border-bottom: 2px solid ${props => props.theme.primary};
  border-left: 5px solid ${props => props.theme.primary};
  background: transparent;
  margin-bottom: 10px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

