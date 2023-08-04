import type { StoryObj, Meta } from '@storybook/react'
import { ToastProps, Toast } from '@rafa-ignite-ui/react'

export default {
  title: 'Form/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira,23 de Outubro às 16h ',
  },
} as Meta<ToastProps>

export const Default: StoryObj<ToastProps> = {
  args: {},
}
