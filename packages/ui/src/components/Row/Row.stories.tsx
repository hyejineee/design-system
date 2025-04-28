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
    bgColor: 'bg.info.subtle',
    color: 'blue.100',
    children: 'BOX',
    gap: 8,
    p: 16,
    flexCenter: true,
  },

  render: (args) => {
    return (
      <Row {...args}>
        <Box p={4} bgColor='bg.error.default'>
          Box 1
        </Box>
        <Box p={4} bgColor='bg.success.default'>
          Box 2
        </Box>
        <Box p={4} bgColor='bg.info.default'>
          Box 3
        </Box>
      </Row>
    );
  },
};

export default meta;
