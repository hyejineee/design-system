import type { Meta, StoryObj } from '@storybook/react';
import { Box } from './Box';

const meta: Meta<typeof Box> = {
  title: 'Box',
  component: Box,
};

type Story = StoryObj<typeof Box>;

export const Primary: Story = {
  args: {
    bgColor: 'bg.info.subtle',
  },
  render: (args) => (
    <Box bgColor='bg.error.default' color='content.error.subtle'>
      sdfds
    </Box>
  ),
};

export default meta;
