import type { Preview } from '@storybook/react';
import '../style.config.ts'; // style.config.ts를 가장 먼저 import

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
