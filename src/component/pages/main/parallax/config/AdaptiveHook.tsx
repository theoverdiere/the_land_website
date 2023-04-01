import { useLayoutEffect, useState } from "react"

export enum ResolutionSize {
  // Mobile
  mobile320 = 'mobile320',
  mobile380 = 'mobile380',
  mobile440 = 'mobile440',
  mobile480 = 'mobile480',
  // Tablette
  tablette500 = 'tablette500',
  tablette560 = 'tablette560',
  tablette620 = 'tablette620',
  tablette680 = 'tablette680',
  tablette740 = 'tablette740',
  tablette800 = 'tablette800',
  tablette860 = 'tablette860',
  tablette920 = 'tablette920',
  tablette980 = 'tablette980',
  tablette1040 = 'tablette1040',

  laptop = 'laptop',
  laptopL = 'laptopL'
}

export enum DeviceModelSize {
  small = 'small',
  medium = 'medium'
}

interface UseAdaptiveTriggersProps {
  onEnter?: () => void
}

export const DeviceModelSizeConfig: Record<ResolutionSize, DeviceModelSize> = {

  //Small
  mobile320: DeviceModelSize.small,
  mobile380: DeviceModelSize.small,
  mobile440: DeviceModelSize.small,
  mobile480: DeviceModelSize.small,

  // Medium
  tablette500: DeviceModelSize.medium,
  tablette560: DeviceModelSize.medium,
  tablette620: DeviceModelSize.medium,
  tablette680: DeviceModelSize.medium,
  tablette740: DeviceModelSize.medium,
  tablette800: DeviceModelSize.medium,
  tablette860: DeviceModelSize.medium,
  tablette920: DeviceModelSize.medium,
  tablette980: DeviceModelSize.medium,
  tablette1040: DeviceModelSize.medium,

  // Large
  laptop: DeviceModelSize.medium,
  laptopL: DeviceModelSize.medium


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
        if (window?.innerWidth <= 480) {
          return setWidth(ResolutionSize.mobile480)
        }

        // Tablette
        if (window?.innerWidth <= 500) {
          return setWidth(ResolutionSize.tablette560)
        }
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
          return setWidth(ResolutionSize.laptop)
        }

        return setWidth(ResolutionSize.laptopL)
      }

    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [onEnter])

  return width
}
