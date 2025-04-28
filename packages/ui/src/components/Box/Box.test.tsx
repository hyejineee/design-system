import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Box } from './Box';

// sprinkles 함수 모킹 (선택 사항)
// jest.mock('@ui/theme/sprinkles.css', () => ({
//   sprinkles: vi.fn((props) => props ? Object.keys(props).map(key => `${key}_${props[key]}`).join(' ') : ''),
// }));
// Vitest에서는 vi.mock을 사용합니다. 만약 모킹이 필요하다면 위 대신 아래처럼 사용하세요.
// vi.mock('@ui/theme/sprinkles.css', () => ({
//   sprinkles: vi.fn((props) => props ? Object.keys(props).map(key => `${key}_${props[key]}`).join(' ') : ''),
// }));

import { baseTheme } from '@ui/theme/baseTheme.css';
import { describe, expect, it } from 'vitest';

describe('Box Component', () => {
  it('"as" prop을 사용하여 지정된 요소로 렌더링되어야 합니다', () => {
    const testId = 'box-section';
    render(
      <Box as='section' data-testid={testId}>
        Section Content
      </Box>
    );
    const boxElement = screen.getByTestId(testId);

    expect(boxElement).toBeInTheDocument();
    expect(boxElement.tagName).toBe('SECTION');
    expect(boxElement).toHaveTextContent('Section Content');
  });

  it('sprinkles prop이 올바르게 적용되어야 합니다', () => {
    const testId = 'box-sprinkles';
    const props = {
      p: 4,
      m: 4,
      bgColor: 'bg.primary.default',
    } as const;

    render(
      <Box data-testid={testId} {...props}>
        Sprinkles Box
      </Box>
    );
    const boxElement = screen.getByTestId(testId);

    expect(boxElement).toHaveStyle(`padding: 4px 4px 4px 4px`);
    expect(boxElement).toHaveStyle(`margin: 4px 4px 4px 4px`);
    expect(boxElement).toHaveStyle(`background-color: ${baseTheme.color.bg.primary.default}`);
  });

  it('id, className과 같은 다른 props를 전달해야 합니다', () => {
    const testId = 'box-other-props';
    render(
      <Box data-testid={testId} id='my-box' className='extra-class'>
        Other Props
      </Box>
    );
    const boxElement = screen.getByTestId(testId);

    expect(boxElement).toHaveAttribute('id', 'my-box');
    expect(boxElement).toHaveClass('extra-class');
  });
});
