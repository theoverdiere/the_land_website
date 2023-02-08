import { IParallax, Parallax } from "@react-spring/parallax";
import { useRef } from "react";
import { Adaptive, useAdaptiveTriggers } from "./AdaptiveHook";
import { PageName, ParallaxConfig } from "./ParallaxConfig";

import ParallaxComposition from "./ParallaxComposition";

function ParallaxComponent({children} : {children: any}) {
  const width: Adaptive = useAdaptiveTriggers({});
  const parallax = useRef<IParallax>(null!);
  
   return (
        <Parallax 
            pages={ParallaxConfig[width].pages}
            ref={parallax}
            key={width}
            >
                <ParallaxComposition >
                    {defineProps(children, PageName.flowerDust ,parallax ,width)}
                </ParallaxComposition>
                <ParallaxComposition >
                    {defineProps(children, PageName.cloudFalls ,parallax ,width)}
                </ParallaxComposition>
                <ParallaxComposition >
                    {defineProps(children, PageName.fire, parallax, width)}
                </ParallaxComposition>
                <ParallaxComposition >
                    {defineProps(children, PageName.neverCatch ,parallax ,width)}
                </ParallaxComposition>






        </Parallax>
   )
}


/**
 * Define props for the Parallax Composition
 * @param children : the information Ref from parents
 * @param compositionName : the name of the composition use to get offset by composition and images
 * @param parallax 
 * @param width 
 * @returns 
 */
function defineProps(children: any, compositionName: PageName, parallax: React.MutableRefObject<IParallax>, width: Adaptive ): any {
    return {
        children: children, 
        width: width, 
        parallax:parallax,
        pageName: compositionName
        };
}

 export default ParallaxComponent;
 