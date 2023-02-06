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
                    {defineProps(children,PageName.neverCatch,parallax, width)}
                </ParallaxComposition>


                <ParallaxComposition >
                {defineProps(children,PageName.fire,parallax, width)}
                </ParallaxComposition>

            
        {/* <ParallaxLayer 
                offset={ParallaxConfig[width].picture.offset}
                speed={ParallaxConfig[width].picture.speed}
                style={{ display:'flex',justifyContent:'center', alignItems:'top'}} >
                    <img src={neverCatch}/>
        </ParallaxLayer> */}
        {/* <ParallaxLayer 
                offset={ParallaxConfig[width].junctionTop.offset}
                speed={ParallaxConfig[width].junctionTop.speed}
                style={{ display:'flex',justifyContent:'center', alignItems:'top'}}>
                    <img src={jonctionOneTop}/>
        </ParallaxLayer>
        <ParallaxLayer 
                offset={ParallaxConfig[width].junctionBottom.offset}
                speed={ParallaxConfig[width].junctionBottom.speed}
                style={{ display:'flex',justifyContent:'center', alignItems:'top'}}>
                    <img src={jonctionOneBottom}/>
        </ParallaxLayer>
        <ParallaxLayer 
                offset={ParallaxConfig[width].parchment.offset}
                speed={ParallaxConfig[width].parchment.speed}
                style={{ display:'flex',justifyContent:'center', alignItems:'top'}}>
                    <img src={parchment}/>
        </ParallaxLayer> */}
     </Parallax>
   )
}


function defineProps(children: any, compositionName: PageName, parallax: React.MutableRefObject<IParallax>, width: Adaptive ): any {

    return {
        children: children, 
        width: width, 
        parallax:parallax,
        pageName: compositionName
        };
}

 export default ParallaxComponent;
 