import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import { ResolutionSize, useAdaptiveTriggers } from "./config/AdaptiveHook";
import { PageName } from "./config/ParallaxConfig";

import ParallaxComposition from "./ParallaxComposition";
import PlayerParchment from "./PlayerParchment";
import LinkBanner from "./LinkBanner";
import { ParallaxResolutionConfig } from "./config/ParallaxResolutionConfig";

function ParallaxComponent() {
    const width: ResolutionSize = useAdaptiveTriggers({});
    const parallax = useRef<IParallax>(null!);

    return (
        <div>
            <Parallax
                pages={ParallaxResolutionConfig[width].pages}
                ref={parallax}
                key={width}
                className="parallaxContainer"
            >
                {/* Player/Links Layer */}
                <ParallaxLayer
                    sticky={{
                        start: 0,
                        end: 4
                    }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'space-between', width: '25%' }}
                >
                    <div className="linkBanner">
                        <LinkBanner></LinkBanner>
                    </div>

                    <div className="linkParchment">
                        <PlayerParchment refScroll={parallax}></PlayerParchment>
                    </div>
                </ParallaxLayer>


                <ParallaxLayer>

                    {/* Flowerdust */}
                    <div id="flowerDust">
                        <ParallaxComposition >
                            {defineProps(PageName.flowerDust, width)}
                        </ParallaxComposition>
                    </div>

                    {/* CloudFalls */}
                    <div id="cloudFalls">
                        <ParallaxComposition >
                            {defineProps(PageName.cloudFalls, width)}
                        </ParallaxComposition>
                    </div>

                    {/* Fire */}
                    <div id="fire">
                        <ParallaxComposition>
                            {defineProps(PageName.fire, width)}
                        </ParallaxComposition>
                    </div>

                    {/* NeverCatch */}
                    <div id="neverCatch">
                        <ParallaxComposition >
                            {defineProps(PageName.neverCatch, width)}
                        </ParallaxComposition>
                    </div>

                </ParallaxLayer>

            </Parallax >
        </div>

    )
}

/**
 * Define props for the Parallax Composition
 * @param compositionName : the name of the composition use to get offset by composition and images
 * @param width : the size of the current screen used
 * @returns 
 */
function defineProps(compositionName: PageName, width: ResolutionSize): any {
    return {
        width: width,
        pageName: compositionName
    };
}

export default ParallaxComponent;
