import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import { Adaptive, useAdaptiveTriggers } from "./AdaptiveHook";
import { PageName, ParallaxConfig } from "./ParallaxConfig";

import ParallaxComposition from "./ParallaxComposition";
import ParchmentPlayer from "../ParchmentPlayer";
import LinkPage from "./LinkPage";

function ParallaxComponent({ children }: { children: any }) {
    const width: Adaptive = useAdaptiveTriggers({});
    const parallax = useRef<IParallax>(null!);

    return (

        <Parallax
            pages={ParallaxConfig[width].pages}
            ref={parallax}
            key={width}
            className="parallaxContainer"
        >
            {/* Inverted Sens */}
            <ParallaxLayer
                sticky={{
                    start: 0,
                    end: 4
                }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'space-between' }}
            >
                <div className="linkPage">
                    <LinkPage></LinkPage>
                </div>

                <div >
                    <ParchmentPlayer refScroll={parallax}></ParchmentPlayer>
                </div>
            </ParallaxLayer>

            {/* Flowerdustr */}
            <div id="flowerDust">
                <ParallaxComposition  >
                    {defineProps(children, PageName.flowerDust, parallax, width)}
                </ParallaxComposition>
            </div>

            {/* CloudFalls */}
            <div id="cloudFalls">
                <ParallaxComposition >
                    {defineProps(children, PageName.cloudFalls, parallax, width)}
                </ParallaxComposition>
            </div>

            {/* Fire */}
            <div id="fire">
                <ParallaxComposition >
                    {defineProps(children, PageName.fire, parallax, width)}
                </ParallaxComposition>
            </div>

            {/* NeverCatch */}
            <div id="neverCatch">
                <ParallaxComposition >
                    {defineProps(children, PageName.neverCatch, parallax, width)}
                </ParallaxComposition>
            </div>
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
