import type { Meta, StoryObj } from '@storybook/react';
import { Column } from 'components/Column';
import { Row } from 'components/Row';
import { RiArrowDropRightLine } from 'react-icons/ri';
import { Button } from './index';

const meta: Meta<typeof Button> = {
  title: 'Inputs/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost', 'soft'],
    },
    colorVariant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'info', 'error', 'success', 'warning'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    isRound: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// 기본 버튼 스타일
export const Default: Story = {
  args: {
    children: '버튼',
    variant: 'solid',
    colorVariant: 'primary',
    size: 'md',
  },
};

// 모든 버튼 스타일 변형
export const AllVariants: Story = {
  render: () => (
    <Column gap={32}>
      {['primary', 'secondary', 'tertiary', 'info', 'error', 'success', 'warning', 'disabled'].map(
        (color) => (
          <Column key={color} gap={16}>
            <h3 style={{ margin: 0 }}>{color}</h3>
            <Row gap={16}>
              {['solid', 'outline', 'ghost', 'soft'].map((variant) => (
                <Button
                  key={`${color}-${variant}`}
                  colorVariant={color as any}
                  variant={variant as any}
                >
                  <Row alignItems='center' gap={4}>
                    {variant}
                    <RiArrowDropRightLine size={32} />
                  </Row>
                </Button>
              ))}
            </Row>
          </Column>
        )
      )}
    </Column>
  ),
};

// 크기 변형
export const Sizes: Story = {
  render: () => (
    <Row gap={16} alignItems='center'>
      <Button size='xs'>Extra Small</Button>
      <Button size='sm'>Small</Button>
      <Button size='md'>Medium</Button>
      <Button size='lg'>Large</Button>
      <Button size='xl'>Extra Large</Button>
    </Row>
  ),
};

// 라운드 버튼
export const RoundedButtons: Story = {
  render: () => (
    <Row gap={16}>
      <Button isRound>라운드 버튼</Button>
      <Button variant='outline' isRound>
        라운드 아웃라인
      </Button>
      <Button variant='soft' isRound>
        라운드 소프트
      </Button>
      <Button variant='ghost' isRound>
        라운드 고스트
      </Button>
    </Row>
  ),
};

// 상호작용 상태
export const InteractiveStates: Story = {
  render: () => (
    <Column gap={16}>
      <Row gap={16}>
        <Button>기본 상태</Button>
        <Button className='hover'>호버 상태</Button>
        <Button className='active'>활성 상태</Button>
      </Row>
      <Row gap={16}>
        <Button variant='outline'>기본 상태</Button>
        <Button variant='outline' className='hover'>
          호버 상태
        </Button>
        <Button variant='outline' className='active'>
          활성 상태
        </Button>
      </Row>
    </Column>
  ),
};
