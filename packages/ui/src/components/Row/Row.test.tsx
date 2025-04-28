import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { baseTheme } from '@ui/theme/baseTheme.css'; // 경로 확인 필요
import { describe, expect, it } from 'vitest';
import { Row } from './index'; // 경로 확인 필요

describe('Row Component', () => {
  it('기본적으로 div 요소와 flex, row 스타일로 렌더링되어야 합니다', () => {
    const testId = 'row-default';
    render(<Row data-testid={testId}>Row Content</Row>);
    const rowElement = screen.getByTestId(testId);

    expect(rowElement).toBeInTheDocument();
    expect(rowElement.tagName).toBe('DIV');
    expect(rowElement).toHaveStyle('display: flex');
    expect(rowElement).toHaveStyle('flex-direction: row');
    expect(rowElement).toHaveTextContent('Row Content');
  });

  it('"as" prop을 사용하여 지정된 요소로 렌더링되어야 합니다', () => {
    const testId = 'row-as-nav';
    render(
      <Row as='nav' data-testid={testId}>
        Nav Row
      </Row>
    );
    const rowElement = screen.getByTestId(testId);

    expect(rowElement.tagName).toBe('NAV');
  });

  it('sprinkles prop (UtilStyleProps)이 올바르게 적용되어야 합니다', () => {
    const testId = 'row-sprinkles';
    const props = {
      p: 4,
      gap: 4,
      bgColor: 'bg.secondary.default',
    } as const;

    render(
      <Row data-testid={testId} {...props}>
        Sprinkles Row
      </Row>
    );
    const rowElement = screen.getByTestId(testId);

    // 참고: 실제 적용되는 스타일 값은 sprinkles 설정에 따라 다를 수 있습니다.
    // baseTheme 값이나 예상되는 CSS 값으로 확인해야 합니다.
    expect(rowElement).toHaveStyle(`padding: 4px 4px 4px 4px`); // 예시 값
    expect(rowElement).toHaveStyle(`gap: 4px`); // theme 값 사용 예시
    expect(rowElement).toHaveStyle(`background-color: ${baseTheme.color.bg.secondary.default}`);
  });

  it('id, className과 같은 다른 HTML 속성을 전달해야 합니다', () => {
    const testId = 'row-other-props';
    render(
      <Row data-testid={testId} id='my-row' className='extra-row-class'>
        Other Props Row
      </Row>
    );
    const rowElement = screen.getByTestId(testId);

    expect(rowElement).toHaveAttribute('id', 'my-row');
    expect(rowElement).toHaveClass('extra-row-class');
  });

  it('flex 관련 스타일 prop (justifyContent, alignItems 등)이 적용되어야 합니다', () => {
    const testId = 'row-flex-props';
    render(
      <Row data-testid={testId} justifyContent='center' alignItems='flex-end'>
        Flex Row
      </Row>
    );
    const rowElement = screen.getByTestId(testId);

    expect(rowElement).toHaveStyle('justify-content: center');
    expect(rowElement).toHaveStyle('align-items: flex-end');
  });
});
