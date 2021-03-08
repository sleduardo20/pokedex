import { Story, Meta } from '@storybook/react/types-6-0';

import Loader from '../components/Loader';

export default {
  title: 'components/Loader',
  component: Loader,
} as Meta;

export const Basic: Story = args => <Loader {...args} />;
