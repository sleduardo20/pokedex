import { Story, Meta } from '@storybook/react/types-6-0';
import { Form } from '@unform/web';

import Input, { InputProps } from '../components/Input';

export default {
  title: 'components/Input',
  component: Input,
  args: {
    name: 'email',
  },
} as Meta;

export const Basic: Story<InputProps> = args => (
  <div style={{ width: 450 }}>
    <Form
      onSubmit={() => {
        console.log('ok');
      }}
    >
      <Input placeholder="Email" {...args} />
    </Form>
  </div>
);
