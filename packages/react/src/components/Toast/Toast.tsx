import { ComponentProps, useState } from 'react'
import {
  ToastContainer,
  ToastProvider,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastViewPort,
} from './styles'
import { Button } from '../Button'
import { X } from 'phosphor-react'

export type ToastProps = ComponentProps<typeof ToastContainer> & {
  title: string
  description?: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  const [open, setOpen] = useState(false)

  return (
    <ToastProvider>
      <Button
        onClick={() => {
          setOpen(true)
        }}
      >
        Agendar
      </Button>
      <ToastContainer open={open} onOpenChange={setOpen} {...props}>
        <ToastTitle>{title}</ToastTitle>
        {description && <ToastDescription>{description}</ToastDescription>}
        <ToastClose>
          <X weight="light" size={20} />
        </ToastClose>
      </ToastContainer>

      <ToastViewPort />
    </ToastProvider>
  )
}
Toast.displayName = 'Toast'
