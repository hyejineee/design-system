import type { Meta, StoryObj } from '@storybook/react';
import { Box } from './Box';

const meta: Meta<typeof Box> = {
  title: 'Layout/Box',
  component: Box,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Box>;

export const Primary: Story = {
  args: {
    bgColor: 'bg.error',
    color: 'content.primary',
    children: 'BOX',
    flexCenter: true,
  },

  render: (args) => {
    return <Box {...args} />;
  },
};

export default meta;
