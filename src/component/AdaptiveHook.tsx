import { useLayoutEffect, useState } from "react"

export enum Adaptive {
    xs = 'xs',
    s = 's',
    m = 'm',
    l = 'l',
    xl = 'xl'
  }
  
  interface UseAdaptiveTriggersProps {
    onExtraSmallEnter?: () => void
    onSmallEnter?: () => void
    onMediumEnter?: () => void
    onLargeEnter?: () => void
    onExtraLargeEnter?: () => void
  }
  
  export const useAdaptiveTriggers = ({
    onExtraSmallEnter,
    onSmallEnter,
    onMediumEnter,
    onLargeEnter,
    onExtraLargeEnter
  }: UseAdaptiveTriggersProps): Adaptive => {
    const [width, setWidth] = useState<Adaptive>(Adaptive.xl)
    useLayoutEffect(() => {
      const handleResize = () => {
        if (window?.innerWidth < 768) {
          onExtraSmallEnter?.()
          return setWidth(Adaptive.xs)
        }
        if (window?.innerWidth < 1024) {
          onSmallEnter?.()
          return setWidth(Adaptive.s)
        }
        if (window?.innerWidth < 1280) {
          onMediumEnter?.()
          return setWidth(Adaptive.m)
        }
        if (window?.innerWidth < 1440) {
          onLargeEnter?.()
          return setWidth(Adaptive.l)
        }
        onExtraLargeEnter?.()
        return setWidth(Adaptive.xl)
      }
      window.addEventListener('resize', handleResize)
      handleResize()
      return () => window.removeEventListener('resize', handleResize)
    }, [
      onSmallEnter,
      onMediumEnter,
      onLargeEnter,
      onExtraLargeEnter,
      onExtraSmallEnter
    ])
    return width
  }