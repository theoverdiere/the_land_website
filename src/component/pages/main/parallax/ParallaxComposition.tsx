
import { PageCompositions, PageName, ParallaxConfig } from "./ParallaxConfig";
import { ParallaxLayer } from "@react-spring/parallax";
import { Adaptive } from "./AdaptiveHook";

function ParallaxComposition({ children }: { children: any }) {
    const width: Adaptive = children.width;
    const pageName: PageName = children.pageName;

    const pageConfig = ParallaxConfig[width][pageName];
    const composition = PageCompositions[pageName];

    return (
        <div>
            <ParallaxLayer id="picture"
                offset={pageConfig.picture.offset}
                speed={pageConfig.picture.speed}
            >
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <img src={composition.imagesUris.pictureUri} />
                </div>
            </ParallaxLayer>
            <ParallaxLayer id="junctionTop"
                offset={pageConfig.junctionTop.offset}
                speed={pageConfig.junctionTop.speed}
            >
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <img src={composition.imagesUris.junctionTopUri} />
                </div>
            </ParallaxLayer>
            <ParallaxLayer id="junctionBottom"
                offset={pageConfig.junctionBottom.offset}
                speed={pageConfig.junctionBottom.speed}
            >
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <img src={composition.imagesUris.junctionBottomUri} />
                </div>
            </ParallaxLayer>
        </div>
    )
}

export default ParallaxComposition;