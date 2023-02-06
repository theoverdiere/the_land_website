
import { PageCompositions, PageName, ParallaxConfig } from "./ParallaxConfig";

import { Adaptive } from "./AdaptiveHook";
import { ParallaxLayer } from "@react-spring/parallax";

function ParallaxComposition({children}:{children:any}) {
    console.log("CHILDREN Composition", children);
    const width: Adaptive = children.width;
    const pageName: PageName = children.pageName;

    const pageConfig = ParallaxConfig[width][pageName];
    const composition = PageCompositions[pageName];
    

    return (
        <div>
        <ParallaxLayer 
            offset= {pageConfig.picture.offset}
            speed={pageConfig.picture.speed}
            style={{ display:'flex',justifyContent:'center', alignItems:'top'}} >
                <img src= {composition.imagesUris.pictureUri}/>
        </ParallaxLayer>
        <ParallaxLayer 
            offset={pageConfig.junctionTop.offset}
            speed={pageConfig.junctionTop.speed}
            style={{ display:'flex',justifyContent:'center', alignItems:'top'}}>
                <img src= {composition.imagesUris.junctionTopUri}/>
        </ParallaxLayer>
        <ParallaxLayer 
            offset={pageConfig.junctionBottom.offset}
            speed={pageConfig.junctionBottom.speed}
            style={{ display:'flex',justifyContent:'center', alignItems:'top'}}>
                <img src= {composition.imagesUris.junctionBottomUri}/>
        </ParallaxLayer>
        <ParallaxLayer 
            offset={pageConfig.parchment.offset}
            speed={pageConfig.parchment.speed}
            style={{ display:'flex',justifyContent:'center', alignItems:'top'}}>
                <img src= {composition.imagesUris.parchmentUri}/>
        </ParallaxLayer>
        </div>
    )
}

export default ParallaxComposition;