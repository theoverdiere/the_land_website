import { useLayoutEffect, useState } from "react"

export enum Adaptive {
  // Mobile
  mobile320 = 'mobile320',
  mobile375 = 'mobile375',
  mobile425 = 'mobile425',
  // Tablette
  mobileL = 'mobileL',
  tablette = 'tablette',
  laptop = 'laptop',
  laptopL = 'laptopL'
}



interface UseAdaptiveTriggersProps {
  onEnter?: () => void
}


export const useAdaptiveTriggers = ({
  onEnter
}: UseAdaptiveTriggersProps): Adaptive => {
  const [width, setWidth] = useState<Adaptive>(Adaptive.mobile320);

  useLayoutEffect(() => {
    const handleResize =
      () => {
        if (window?.innerWidth >= 320) {
          return setWidth(Adaptive.mobile320)
        }
        if (window?.innerWidth >= 375) {
          return setWidth(Adaptive.mobile375)
        }
        if (window?.innerWidth >= 425) {
          return setWidth(Adaptive.mobile425)
        }
        // if (window?.innerWidth >= 768 - 1) {
        //   return setWidth(Adaptive.mobileL)
        // }
        // if (window?.innerWidth < 1024 - 1) {
        //   return setWidth(Adaptive.tablette)
        // }
        // if (window?.innerWidth < 1440 - 1) {
        //   return setWidth(Adaptive.laptop)
        // }

        return setWidth(Adaptive.laptopL)
      }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [onEnter])
  return width
}


// TODO: find how to do it
function defineWith(setWidth: React.Dispatch<React.SetStateAction<Adaptive>>): void {
  if (window?.innerWidth < 360 && window?.innerHeight < 640) {
    return setWidth(Adaptive.mobile375)
  }
  if (window?.innerWidth < 360 && window?.innerHeight < 640) {
    return setWidth(Adaptive.mobile425)
  }

}



