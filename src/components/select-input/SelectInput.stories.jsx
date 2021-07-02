import React from 'react';
import { SelectInput } from './SelectInput';

export default {
  title: 'Components/Select Input',
  component: SelectInput,
};

export const defaultSelectInput = () => <SelectInput variant="default" />
export const primarySelectInput = () => <SelectInput variant="primary" />
export const darkSelectInput = () => <SelectInput variant="dark" />

export const labelledSelectInput = () => (
	<SelectInput label="Test label" variant="default" />
);
