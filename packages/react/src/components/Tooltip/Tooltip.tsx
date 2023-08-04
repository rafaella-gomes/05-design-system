import { ComponentProps, ReactNode } from 'react'
import {
  TooltipContainer,
  TooltipProvider,
  TooltipTrigger,
  TooltipPortal,
  TooltipContent,
  TooltipArrow,
} from './styles'

export type TooltipProps = ComponentProps<typeof TooltipContainer> & {
  Content: string | ReactNode
}

export function Tooltip({ Content, children, ...props }: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipContainer {...props}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipPortal>
          <TooltipContent>
            <TooltipArrow />
            {Content}
          </TooltipContent>
        </TooltipPortal>
      </TooltipContainer>
    </TooltipProvider>
  )
}
Tooltip.displayName = 'Tooltip'
