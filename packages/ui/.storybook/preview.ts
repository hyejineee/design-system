import type { Preview } from '@storybook/react';
import '../style.config.css.ts';
import '../style.config.ts';

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
