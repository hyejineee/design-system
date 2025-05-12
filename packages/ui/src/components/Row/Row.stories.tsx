import type { Meta, StoryObj } from '@storybook/react';
import { Box } from 'components/Box';
import { Row } from './index';

const meta: Meta<typeof Row> = {
  title: 'Layout/Row',
  component: Row,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Row>;

export const Primary: Story = {
  args: {
    bgColor: 'bg.error',
    color: 'blue.100',
    children: 'BOX',
    gap: 8,
    p: 16,
    flexCenter: true,
  },

  render: (args) => {
    return (
      <Row {...args}>
        <Box p={4} bgColor='bg.error'>
          Box 1
        </Box>
        <Box p={4} bgColor='bg.success'>
          Box 2
        </Box>
        <Box p={4} bgColor='bg.info'>
          Box 3
        </Box>
      </Row>
    );
  },
};

export default meta;
