
import { PageCompositions, PageName, ParallaxConfig } from "./ParallaxConfig";

import { ParallaxLayer } from "@react-spring/parallax";
import { Adaptive } from "./AdaptiveHook";

function ParallaxComposition({children}:{children:any}) {
    const width: Adaptive = children.width;
    const pageName: PageName = children.pageName;

    const pageConfig = ParallaxConfig[width][pageName];
    const composition = PageCompositions[pageName];
    
    return (
        <div>
        <ParallaxLayer id = "picture"
            offset= {pageConfig.picture.offset}
            speed={pageConfig.picture.speed}
            style={{ display:'flex',justifyContent:'center'}} >
                <img src= {composition.imagesUris.pictureUri}/>
        </ParallaxLayer>
        <ParallaxLayer id="junctionTop"
            offset={pageConfig.junctionTop.offset}
            speed={pageConfig.junctionTop.speed}
            style={{ display:'flex',justifyContent:'center'}}>
                <img src= {composition.imagesUris.junctionTopUri}/>
        </ParallaxLayer>
        <ParallaxLayer id = "junctionBottom"
            offset={pageConfig.junctionBottom.offset}
            speed={pageConfig.junctionBottom.speed}
            style={{ display:'flex',justifyContent:'center'}}>
                <img src= {composition.imagesUris.junctionBottomUri}/>
        </ParallaxLayer>
        <ParallaxLayer id="parchment"
            onClick={() => onclick()}
            offset={pageConfig.parchment.offset}
            speed={pageConfig.parchment.speed}
            style={{ display:'flex',justifyContent:'center'}}>
                <img src= {composition.imagesUris.parchmentUri}/>
        </ParallaxLayer>
        </div>
    )
}

function onclick(){
    console.log('HELO');
} 



export default ParallaxComposition;