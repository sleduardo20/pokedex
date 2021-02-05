import { Story, Meta } from '@storybook/react/types-6-0';

import Card from '../components/Card';

export default {
  title: 'components/Card',
  component: Card,
} as Meta;

export const Basic: Story = args => <Card {...args} />;
