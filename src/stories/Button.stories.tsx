import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button, { ButtonProps } from '../pages/components/common/Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta <typeof Button> 

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Button',
}

export const Loading = Template.bind({})

Loading.args = {
  children: 'Button',
  isLoading: true
}
