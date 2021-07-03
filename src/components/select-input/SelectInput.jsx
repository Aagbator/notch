import React, {useState, useEffect} from 'react';
import { oneOf, func, string, arrayOf, shape, any } from 'prop-types';
import { StyledSelectWrapper, StyledSelectInput, StyledSelectLabel, StyledSelect } from "./SelectInput.styles.jsx"

export const SelectInput = ({ label, variant, data, onChange, ...props}) => {

 const [options, setOptions] = useState([]);

 useEffect(() => {
  setOptions(options);
   return () => {
     // cleanup
   }
 }, [options])

  // check if the data is valid 
  if(!Array.isArray(data) || 
    data.length === 0 || 
    typeof data[0]['name'] == 'undefined' ||
    typeof data[0]['value'] == 'undefined' ) {
      return false;
  }

  
  const selectOptions = data.map((option, index) => (
    <option key={index} value={option.value}>{option.name}</option>
  ));
  
  return (
    <StyledSelectInput
      type="button"
      variant={variant}
      onChange={onChange}
      data={data}
      {...props}
    >
      {label && (<StyledSelectLabel>{label}</StyledSelectLabel>)}
      <StyledSelectWrapper variant={variant}>
        <StyledSelect variant={variant}>
          {selectOptions}
        </StyledSelect>
      </StyledSelectWrapper>
    </StyledSelectInput>
  );
};

SelectInput.propTypes = {
  /**
   * Label text
   */
   label: string,
  /**
   * What color should the button be?
   */
  variant: oneOf(['default', 'primary', 'dark']),
  /**
   * An array of {name, value} pairs
   */
   data: arrayOf(shape({ name: string, value: any })),
  /**
   * Required onChange handler
   */
   onChange: func,
};

SelectInput.defaultProps = {
  variant:"default",
  data: [{name: 'name1', value: 1}, {name: 'name2', value: 2}]
};