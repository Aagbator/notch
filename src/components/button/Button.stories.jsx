import React from 'react';

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const primaryButton = () => (
	<Button variant="primary">primary</Button>
);

export const darkButton = () => (
	<Button variant="dark">dark</Button>
);

export const expandButton = () => (
	<Button icon="expand">expand</Button>
);

export const closeButton = () => (
	<Button icon="close">close</Button>
);
