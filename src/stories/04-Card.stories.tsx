import { Story, Meta } from '@storybook/react/types-6-0';

import Card, { CardProps } from '../components/Card';
import mock from '../components/Card/mock';

export default {
  title: 'components/Card',
  component: Card,
  args: {
    name: mock.name,
    size: 'large',
    imageUrlHiRes: mock.imageUrlHiRes,
    slug: mock.name,
  },
} as Meta;

export const Basic: Story<CardProps> = args => <Card {...args} />;
