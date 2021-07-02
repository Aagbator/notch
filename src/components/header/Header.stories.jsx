import React from 'react';
import { Header } from './Header';

export default {
  title: 'Components/Header',
  component: Header,
};

export const primaryHeader = () => (
	<Header variant="primary" />
);

export const darkHeader = () => (
	<Header variant="dark" />
);
