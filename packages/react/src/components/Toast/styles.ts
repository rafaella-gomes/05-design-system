import * as Toast from '@radix-ui/react-toast'
import { styled, keyframes } from '../../styles'

export const ToastProvider = styled(Toast.Provider, {})
const VIEWPORT_PADDING = 32
const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

export const ToastContainer = styled(Toast.Root, {
  background: '$gray600',
  borderRadius: '$sm',
  padding: '$3 $5',
  fontFamily: '$default',
  lineHeight: '$base',
  position: 'relative',

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in`,
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x)),',
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out',
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut}100ms ease-out`,
    },
  },
})

export const ToastTitle = styled(Toast.Title, {
  fontSize: '$xl',
  color: '$white',
  fontWeight: '$bold',
})

export const ToastDescription = styled(Toast.Description, {
  fontSize: '$sm',
  color: '$gray200',
  fontWeight: '$regular',
  marginTop: '$1',
})

export const ToastClose = styled(Toast.Close, {
  top: '$4',
  right: '$4',
  position: 'absolute',
  background: 'none',
  border: 'none',
  color: '$gray200',
  cursor: 'pointer',
})

export const ToastViewPort = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: 10,
  width: 390,
  maxWidth: ' 100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})
