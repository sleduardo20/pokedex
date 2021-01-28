import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { ButtonProps } from '../components/Button';

export default {
  title: 'components/Button',
  component: Button,
} as Meta;

export const Basic: Story<ButtonProps> = args => (
  <Button {...args}>Buscar</Button>
);
