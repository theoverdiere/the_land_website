import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import { Adaptive, useAdaptiveTriggers } from "./AdaptiveHook";
import { PageName, ParallaxConfig } from "./ParallaxConfig";

import ParallaxComposition from "./ParallaxComposition";
import ParchmentPlayer from "./player/ParchmentPlayer";

function ParallaxComponent({ children }: { children: any }) {
    const width: Adaptive = useAdaptiveTriggers({});
    const parallax = useRef<IParallax>(null!);

    return (

        <Parallax
            pages={ParallaxConfig[width].pages}
            ref={parallax}
            key={width}
        >
            {/* Inverted Sens */}

            <ParallaxLayer
                sticky={{
                    start: 0,
                    end: 4
                }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'flex-end' }}

            >
                <div>
                    <ParchmentPlayer refScroll={parallax}></ParchmentPlayer>
                </div>
            </ParallaxLayer>


            {/* Flowerdustr */}
            <ParallaxComposition >
                {defineProps(children, PageName.flowerDust, parallax, width)}
            </ParallaxComposition>

            {/* CloudFalls */}
            <ParallaxComposition >
                {defineProps(children, PageName.cloudFalls, parallax, width)}
            </ParallaxComposition>

            {/* Fire */}
            <ParallaxComposition >
                {defineProps(children, PageName.fire, parallax, width)}
            </ParallaxComposition>

            {/* NeverCatch */}
            <ParallaxComposition >
                {defineProps(children, PageName.neverCatch, parallax, width)}
            </ParallaxComposition>


            {/* <ParallaxLayer
                //  className="grainLayer" 
                sticky={{
                    start: 0.9,
                    end: 4
                }}>
                <img src={parchment}></img>
            </ParallaxLayer> */}

        </Parallax >

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
function defineProps(children: any, compositionName: PageName, parallax: React.MutableRefObject<IParallax>, width: Adaptive): any {
    return {
        children: children,
        width: width,
        parallax: parallax,
        pageName: compositionName
    };
}

export default ParallaxComponent;
