import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@rafa-ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea quisquam temporibus quos explicabo adipisci, repellendus reprehenderit facere quibusdam repellat eaque nobis, commodi molestias aspernatur libero eius, ratione quaerat dignissimos necessitatibus.',
  },
  argTypes: {
    sizes: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
