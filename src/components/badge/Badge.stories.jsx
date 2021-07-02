import React from 'react';

import { Badge } from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
};

export const primaryBadge = () => (
	<Badge variant="primary">primary</Badge>
);

export const darkBadge = () => (
	<Badge variant="dark">dark</Badge>
);

export const successBadge = () => (
	<Badge variant="success">success</Badge>
);

export const warningBadge = () => (
	<Badge variant="warning">warning</Badge>
);

export const roundBadge = () => (
	<Badge variant="warning" rounded={true}>round</Badge>
);

