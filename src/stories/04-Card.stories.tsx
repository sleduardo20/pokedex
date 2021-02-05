import { Story, Meta } from '@storybook/react/types-6-0';

import Card, { CardProps } from '../components/Card';
import mockCard from '../components/Card/mock';

export default {
  title: 'components/Card',
  component: Card,
  args: {
    src: mockCard.imageUrl,
    title: mockCard.name,
    size: 'normal',
  },
} as Meta;

export const Basic: Story<CardProps> = args => <Card {...args} />;
