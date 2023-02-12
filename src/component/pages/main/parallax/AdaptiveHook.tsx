import { useLayoutEffect, useState } from "react"

export enum Adaptive {
  // Mobile
  mobileXS = 'mobileXS',
  mobileS = 'mobileS',
  mobileM = 'mobileM',
  mobileL = 'mobileL',
  // Tablette
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
    const [width, setWidth] = useState<Adaptive>(Adaptive.mobileXS);

    useLayoutEffect(() => {
      const handleResize = 
      () => {
        if (window?.innerWidth < 320-1  ) {
          return setWidth(Adaptive.mobileXS)
        }
        if (window?.innerWidth < 375-1 ) {
          return setWidth(Adaptive.mobileS)
        }
        if (window?.innerWidth > 425-1 ) {
          return setWidth(Adaptive.mobileM)
        }
        if (window?.innerWidth < 768-1 ) {
          return setWidth(Adaptive.mobileL)
        }
        if (window?.innerWidth < 1024-1 ) {
          return setWidth(Adaptive.tablette)
        }
        if (window?.innerWidth < 1440-1 ) {
          return setWidth(Adaptive.laptop)
        }

        return setWidth(Adaptive.laptopL)
      }
      window.addEventListener('resize', handleResize)
      handleResize()
      return () => window.removeEventListener('resize', handleResize)
    }, [onEnter])
    return width
  }


  // TODO: find how to do it
function defineWith( setWidth: React.Dispatch<React.SetStateAction<Adaptive>> ): void {
  if (window?.innerWidth < 360 && window?.innerHeight < 640 ) {
    return setWidth(Adaptive.mobileS)
  }
  if (window?.innerWidth < 360 && window?.innerHeight < 640 ) {
    return setWidth(Adaptive.mobileM)
  }

}


  
  