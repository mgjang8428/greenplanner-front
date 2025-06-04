import type { Meta, StoryObj } from '@storybook/react';

import Top from './Top';
import { MemoryRouter } from 'react-router';

const meta = {
	component: Top,
} satisfies Meta<typeof Top>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
	decorators: [
		(Story) => (
			<MemoryRouter>
				<Story />
			</MemoryRouter>
		),
	],
};
