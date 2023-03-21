
import { PageCompositions, PageName } from "./config/ParallaxConfig";
import { ParallaxLayer } from "@react-spring/parallax";
import { ResolutionSize } from "./config/AdaptiveHook";
import { ParallaxResolutionConfig } from "./config/ParallaxResolutionConfig";

function ParallaxComposition({ children }: { children: { width: ResolutionSize, pageName: PageName } }) {

    const width: ResolutionSize = children.width;
    const pageName: PageName = children.pageName;


    const parallaxResolutionConfig = ParallaxResolutionConfig[width];
    const widthConfig = parallaxResolutionConfig.largeur;
    const pageConfig = parallaxResolutionConfig[pageName];
    const composition = PageCompositions[pageName];

    return (
        <div className="COMP">
            <ParallaxLayer id="picture"
                offset={pageConfig.picture.offset}
                speed={pageConfig.picture.speed}
            >
                <div style={{ width: widthConfig }}>
                    {composition.imagesUris.pictureSvg}
                </div>
            </ParallaxLayer>
            <ParallaxLayer id="junctionTop"
                offset={pageConfig.junctionTop.offset}
                speed={pageConfig.junctionTop.speed}
            >
                <div style={{ width: widthConfig }}>
                    {composition.imagesUris.junctionTopUri}
                </div>
            </ParallaxLayer>
            <ParallaxLayer id="junctionBottom"
                offset={pageConfig.junctionBottom.offset}
                speed={pageConfig.junctionBottom.speed}
            >
                <div style={{ width: widthConfig }}>
                    {composition.imagesUris.junctionBottomUri}
                </div>
            </ParallaxLayer>
        </div>
    )

}


export default ParallaxComposition;