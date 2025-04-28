import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '../Box'; // 예시를 위해 Box 컴포넌트 추가
import { Column } from './index'; // Row -> Column 으로 변경

const meta: Meta<typeof Column> = {
  // Row -> Column 으로 변경
  title: 'Layout/Column', // Row -> Column 으로 변경
  component: Column, // Row -> Column 으로 변경
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Column>; // Row -> Column 으로 변경

export const Primary: Story = {
  args: {
    gap: 8,
    p: 16,
    bgColor: 'bg.primary.inverse',
  },

  render: (args) => {
    // Column 레이아웃을 보여주는 예시
    return (
      <Column {...args}>
        <Box p={4} bgColor='bg.error.default'>
          Box 1
        </Box>
        <Box p={4} bgColor='bg.success.default'>
          Box 2
        </Box>
        <Box p={4} bgColor='bg.info.default'>
          Box 3
        </Box>
      </Column>
    );
  },
};

export default meta;
