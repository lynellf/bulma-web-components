// @ts-nocheck
import { configure } from '@storybook/polymer';

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);
