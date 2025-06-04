import type { Meta, StoryObj } from '@storybook/react';

import Layout from './Layout';
import { MemoryRouter } from 'react-router';

const meta = {
	component: Layout,
} satisfies Meta<typeof Layout>;

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
