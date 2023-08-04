import type { StoryObj, Meta } from '@storybook/react'
import { Box, TooltipProps, Tooltip, Button } from '@rafa-ignite-ui/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {
    children: <Button>Date</Button>,
    Content: '21 de Outubro - Disponível',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '$2',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Available: StoryObj<TooltipProps> = {
  args: {},
}

export const Unavailable: StoryObj<TooltipProps> = {
  args: {
    Content: '26 de Outubro - Indisponível',
  },
}
