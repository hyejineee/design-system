import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { baseTheme } from '@ui/theme/baseTheme.css'; // 실제 테마 파일 경로로 수정해주세요.
import { describe, expect, it } from 'vitest';
import { Column } from './index';

describe('Column Component', () => {
  it('기본적으로 div 요소와 flex, column 스타일로 렌더링되어야 합니다', () => {
    const testId = 'column-default';
    render(<Column data-testid={testId}>Column Content</Column>);
    const columnElement = screen.getByTestId(testId);

    expect(columnElement).toBeInTheDocument();
    expect(columnElement.tagName).toBe('DIV');
    expect(columnElement).toHaveStyle('display: flex');
    expect(columnElement).toHaveStyle('flex-direction: column');
    expect(columnElement).toHaveTextContent('Column Content');
  });

  it('"as" prop을 사용하여 지정된 요소로 렌더링되어야 합니다', () => {
    const testId = 'column-as-section';
    render(
      <Column as='section' data-testid={testId}>
        Section Column
      </Column>
    );
    const columnElement = screen.getByTestId(testId);

    expect(columnElement.tagName).toBe('SECTION');
  });

  it('sprinkles prop (UtilStyleProps)이 올바르게 적용되어야 합니다', () => {
    const testId = 'column-sprinkles';
    const props = {
      p: 4, // 다른 값으로 테스트
      gap: 4, // 다른 값으로 테스트
      bgColor: 'bg.primary.default', // 다른 값으로 테스트
    } as const;

    render(
      <Column data-testid={testId} {...props}>
        Sprinkles Column
      </Column>
    );
    const columnElement = screen.getByTestId(testId);

    expect(columnElement).toHaveStyle(`padding: 4px 4px 4px 4px`); // 예시 값
    expect(columnElement).toHaveStyle(`gap: 4px`); // theme 값 사용 예시 (실제 값 확인 필요)
    expect(columnElement).toHaveStyle(`background-color: ${baseTheme.color.bg.primary.default}`);
    expect(columnElement).toHaveStyle('flex-direction: column'); // 기본 flex-direction 유지 확인
  });

  it('id, className과 같은 다른 HTML 속성을 전달해야 합니다', () => {
    const testId = 'column-other-props';
    render(
      <Column data-testid={testId} id='my-column' className='extra-column-class'>
        Other Props Column
      </Column>
    );
    const columnElement = screen.getByTestId(testId);

    expect(columnElement).toHaveAttribute('id', 'my-column');
    expect(columnElement).toHaveClass('extra-column-class');
  });

  it('flex 관련 스타일 prop (justifyContent, alignItems 등)이 적용되어야 합니다', () => {
    const testId = 'column-flex-props';
    render(
      <Column data-testid={testId} justifyContent='space-between' alignItems='stretch'>
        Flex Column
      </Column>
    );
    const columnElement = screen.getByTestId(testId);

    expect(columnElement).toHaveStyle('justify-content: space-between');
    expect(columnElement).toHaveStyle('align-items: stretch');
    expect(columnElement).toHaveStyle('flex-direction: column'); // 기본 flex-direction 유지 확인
  });
});
