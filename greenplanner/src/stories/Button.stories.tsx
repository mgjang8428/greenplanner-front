import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Button from '@src/app/component/Button';

const meta = {
  title: 'DefaultComponent/Button',
	component: Button,
  parameters: {
    componentSubtitle: '기본 버튼 컴포넌트',
    docs: {
      description: {
        component: `* 버튼 클릭 시 **action** props로 전달된 함수가 실행됩니다.
* **children** props로 전달된 요소가 버튼의 역할을 하게 됩니다.`
      }
    }
  },
  argTypes: {
    className: {
      description: 'tailwind css 디자인 요소',
      control: false,
    },
    children: {
      description: '버튼에 표시될 요소',
      control: {
        type: 'text',
      }
    },
    action: {
      description: '버튼 클릭 시 실행되는 함수',
    },
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
    children: 'Button',
    action: fn(),
	},
};
