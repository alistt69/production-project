import 'app/styles/index.scss';
import { Decorator } from '@storybook/react';

export const StyleDecorator: Decorator = (Story, context) => (
  <div>
    <Story {...context} />
  </div>
);