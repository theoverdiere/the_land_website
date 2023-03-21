import { useLayoutEffect, useState } from "react"

export enum ResolutionSize {
  // Mobile
  mobile320 = 'mobile320',
  mobile380 = 'mobile380',
  mobile440 = 'mobile440',
  mobile500 = 'mobile500',
  // Tablette
  tablette560 = 'tablette560',
  tablette620 = 'tablette620',
  tablette680 = 'tablette680',
  tablette740 = 'tablette740',
  tablette800 = 'tablette800',
  tablette860 = 'tablette860',
  tablette920 = 'tablette920',
  tablette980 = 'tablette980',
  tablette1040 = 'tablette1040',

  desktop1440 = 'laptop',
  desktop = 'laptopL'
}

interface UseAdaptiveTriggersProps {
  onEnter?: () => void
}

export const useAdaptiveTriggers = ({
  onEnter
}: UseAdaptiveTriggersProps): ResolutionSize => {
  const [width, setWidth] = useState<ResolutionSize>(ResolutionSize.mobile320);

  useLayoutEffect(() => {
    const handleResize =
      () => {
        // Mobile
        if (window?.innerWidth <= 320) {
          return setWidth(ResolutionSize.mobile320)
        }
        if (window?.innerWidth <= 380) {
          return setWidth(ResolutionSize.mobile380)
        }
        if (window?.innerWidth <= 440) {
          return setWidth(ResolutionSize.mobile440)
        }
        if (window?.innerWidth <= 500) {
          return setWidth(ResolutionSize.mobile500)
        }

        // Tablette
        if (window?.innerWidth <= 560) {
          return setWidth(ResolutionSize.tablette560)
        }
        if (window?.innerWidth <= 620) {
          return setWidth(ResolutionSize.tablette620)
        }
        if (window?.innerWidth <= 680) {
          return setWidth(ResolutionSize.tablette680)
        }
        if (window?.innerWidth <= 740) {
          return setWidth(ResolutionSize.tablette740)
        }
        if (window?.innerWidth <= 800) {
          return setWidth(ResolutionSize.tablette800)
        }
        if (window?.innerWidth <= 860) {
          return setWidth(ResolutionSize.tablette860)
        }
        if (window?.innerWidth <= 920) {
          return setWidth(ResolutionSize.tablette920)
        }
        if (window?.innerWidth <= 980) {
          return setWidth(ResolutionSize.tablette980)
        }
        if (window?.innerWidth <= 1040) {
          return setWidth(ResolutionSize.tablette1040)
        }


        // Desktop
        if (window?.innerWidth <= 1440) {
          return setWidth(ResolutionSize.desktop1440)
        }

        return setWidth(ResolutionSize.desktop)
      }

    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [onEnter])
  return width
}
