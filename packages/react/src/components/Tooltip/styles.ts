import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipProvider = styled(Tooltip.Provider, {})

export const TooltipContainer = styled(Tooltip.Root, {})

export const TooltipTrigger = styled(Tooltip.Trigger, {})

export const TooltipPortal = styled(Tooltip.Portal, {})

export const TooltipContent = styled(Tooltip.Content, {
  background: '$gray900',
  color: '$gray100',
  borderRadius: '$sm',
  padding: '$3 $4',
  fontFamily: '$default',
  fontSize: '$sm',
  lineHeight: '$short',
  fontWeight: '$medium',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
