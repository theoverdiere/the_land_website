
import { PageCompositions, PageName } from "./config/ParallaxConfig";
import { ParallaxLayer } from "@react-spring/parallax";
import { DeviceModelSize, DeviceModelSizeConfig, ResolutionSize } from "./config/AdaptiveHook";
import { ParallaxResolutionConfig } from "./config/ParallaxResolutionConfig";

function ParallaxComposition({ children }: { children: { width: ResolutionSize, pageName: PageName } }) {

    const width: ResolutionSize = children.width;
    const pageName: PageName = children.pageName;

    const deviceModelSize = DeviceModelSizeConfig[width];

    // Give specifics parallax parameters by device resolution
    const parallaxResolutionConfig = ParallaxResolutionConfig[width];
    const widthConfig = parallaxResolutionConfig.largeur;
    const pageConfig = parallaxResolutionConfig[pageName];

    // Give composition models by device model size
    const composition = PageCompositions[deviceModelSize][pageName];
    const isBorderLargeScren = deviceModelSize !== DeviceModelSize.small;

    return (
        <div className="parallaxComposition">
            <ParallaxLayer id="picture"
                className="parallaxElement"
                offset={pageConfig.picture.offset}
                speed={pageConfig.picture.speed}

            >
                <div style={{ width: (widthConfig) }}>
                    <div className={`${isBorderLargeScren ? "borderLargeScreen" : ""}`}>
                        {composition.imagesUris.pictureSvg}
                    </div>

                </div>
            </ParallaxLayer>
            <ParallaxLayer id="junctionTop"
                className="parallaxElement"
                offset={pageConfig.junctionTop.offset}
                speed={pageConfig.junctionTop.speed}
            >
                <div style={{ width: widthConfig }}>
                    <div className={`${isBorderLargeScren ? "borderLargeScreen" : ""}`}>
                        {composition.imagesUris.junctionTopUri}
                    </div>
                </div>
            </ParallaxLayer>
            <ParallaxLayer id="junctionBottom"
                className="parallaxElement"
                offset={pageConfig.junctionBottom.offset}
                speed={pageConfig.junctionBottom.speed}
            >

                <div style={{ width: widthConfig }}>
                    <div className={`${isBorderLargeScren ? "borderLargeScreen" : ""}`}>
                        {composition.imagesUris.junctionBottomUri}
                    </div>
                </div>
            </ParallaxLayer>
        </div>
    )

}


export default ParallaxComposition;