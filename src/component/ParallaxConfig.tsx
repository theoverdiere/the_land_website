import { Adaptive } from "./AdaptiveHook"

import parchment from '../imgs/parchemin.svg';

import neverCatch from '../imgs/never_catch.svg';
import jonctionOneTop from '../imgs/jonction_top_one.svg';
import jonctionOneBottom from '../imgs/jonction_bottom_one.svg';

import fire from '../imgs/fire.svg';
import jonctionTwoMiddle from '../imgs/jonction_middle_two.svg';
import jonctionTwoEdge from '../imgs/jonction_edge_two.svg';

import cloudFalls from '../imgs/cloud_falls.svg';
import jonctionThreeTop from '../imgs/jonction_top_three.svg';
import jonctionThreeBottom from '../imgs/jonction_bottom_three.svg';

import flowerdust from '../imgs/flowerdust.svg';

export const NOT_RENDERED = 'NOT_RENDERED';


export enum PageName {
  neverCatch= 'neverCatch',
  fire= 'fire',
  cloudFalls= 'cloudFalls',
  flowerDust= 'flowerDust',
}

export interface PageComposition {
    imagesUris: {
        pictureUri: string,
        junctionTopUri: string,
        junctionBottomUri: string,
        parchmentUri: string
    }
}

export const PageCompositions: Record<PageName, PageComposition> = {
    [PageName.neverCatch]: {
        imagesUris: {
            pictureUri : neverCatch,
            junctionTopUri: jonctionOneTop,
            junctionBottomUri: jonctionOneBottom,
            parchmentUri: parchment
        }
    },
    [PageName.fire]: {
        imagesUris: {
            pictureUri : fire,
            junctionTopUri: jonctionTwoMiddle,
            junctionBottomUri: jonctionTwoEdge,
            parchmentUri: parchment
        }
    },
    [PageName.cloudFalls]: {
        imagesUris: {
            pictureUri : cloudFalls,
            junctionTopUri: jonctionThreeTop,
            junctionBottomUri: jonctionThreeBottom,
            parchmentUri: parchment
        }
    },
    [PageName.flowerDust]: {
        imagesUris: {
            pictureUri : flowerdust,
            junctionTopUri: jonctionTwoMiddle,
            junctionBottomUri: jonctionTwoEdge,
            parchmentUri: parchment
        }
    }
}

export enum GraphicParts {
    picture= 'picture',
    junctionTop= 'junctionTop',
    junctionBottom= 'junctionBottom',
    parchment='parchment'
  }

  export interface PageConfig {
    offset: number
    speed: number
  }
  
  export interface LayoutConfig {
    pages: number
    largeur:string
  }

  export const ParallaxConfig:  Record<Adaptive,Record<PageName, Record<GraphicParts, PageConfig>> & LayoutConfig > = {
    [Adaptive.xs]: {
      pages:4,
      largeur: '100%',
      [PageName.neverCatch]:{
        [GraphicParts.picture]:{
          offset: 0,
          speed: 0
        },
        [GraphicParts.junctionTop]:{
          offset: 0.3,
          speed: 0.1
        },
        [GraphicParts.junctionBottom]: {
          offset: 0.8,
          speed: 0.2
        },
        [GraphicParts.parchment]: {
          offset: 0.8,
          speed: 0.18
        }
      },
      [PageName.fire]:{
        [GraphicParts.picture]:{
          offset: 1,
          speed: 0.2
        },
        [GraphicParts.junctionTop]:{
          offset: 1.8,
          speed: 0.1
        },
        [GraphicParts.junctionBottom]:{
          offset: 1.88,
          speed: 0.15
        },
        [GraphicParts.parchment]:{
          offset: 1.85,
          speed: 0.18
      }
    },
      [PageName.cloudFalls]:{
        [GraphicParts.picture]:{
          offset: 2.2,
          speed: 0.1
        },
        [GraphicParts.junctionTop]:{
          offset: 2.9,
          speed: 0.15
        },
        [GraphicParts.junctionBottom]:{
          offset: 2.96,
          speed: 0.12
        },
        [GraphicParts.parchment]:{
          offset: 2.98,
          speed: 0.2
        }
      },
      [PageName.flowerDust]:{
        [GraphicParts.picture]:{
          offset: 3.017,
          speed: 0.2,
        },
        [GraphicParts.junctionTop]:{
          offset: 5,
          speed: 0,
        },
        [GraphicParts.junctionBottom]:{
          offset: 5,
          speed: 0,
        },
        [GraphicParts.parchment]:{
          offset: 3.81,
          speed: 0,
        }
      }
    },
    [Adaptive.s]: {
      pages:3,
      largeur: '100%',
      [PageName.neverCatch]:{
        [GraphicParts.picture]: {
          offset: 0,
          speed: 0
        },
        [GraphicParts.junctionTop]: {
          offset: 0.28,
          speed: 0.1,
        },
        [GraphicParts.junctionBottom]: {
          offset: 0.83,
          speed: 0.2
        },
        [GraphicParts.parchment]: {
          offset: 0.85,
          speed: 0.18
        }
      },
      [PageName.fire]:{
        [GraphicParts.picture]:{
          offset: 0,
          speed: 0,
        },
        [GraphicParts.junctionTop]:{
          offset: 0,
          speed: 0,
        },
        [GraphicParts.junctionBottom]:{
          offset: 0,
          speed: 0,
        },
        [GraphicParts.parchment]:{
          offset: 0,
          speed: 0,
        }
      },
      [PageName.cloudFalls]:{
        [GraphicParts.picture]:{
          offset: 0,
          speed: 0,
        },
        [GraphicParts.junctionTop]:{
          offset: 0,
          speed: 0,
        },
        [GraphicParts.junctionBottom]:{
          offset: 0,
          speed: 0,
        },
        [GraphicParts.parchment]:{
          offset: 0,
          speed: 0,
        }
      },
      [PageName.flowerDust]:{
        [GraphicParts.picture]:{
          offset: 0,
          speed: 0,
        },
        [GraphicParts.junctionTop]:{
          offset: 0,
          speed: 0,
        },
        [GraphicParts.junctionBottom]:{
          offset: 0,
          speed: 0,
        },
        [GraphicParts.parchment]:{
          offset: 0,
          speed: 0,
        }
      }
    },
    [Adaptive.m]: {
      pages:3,
      largeur: '100%',
      [PageName.neverCatch]:{
        [GraphicParts.picture]: {
          offset: 0,
          speed: 0
        },
        [GraphicParts.junctionTop]: {
          offset: 0.28,
          speed: 0.1,
        },
        [GraphicParts.junctionBottom]: {
          offset: 0.83,
          speed: 0.2
        },
        [GraphicParts.parchment]: {
          offset: 0.85,
          speed: 0.18
        }
      },
      [PageName.fire]:{
        [GraphicParts.picture]:{
          offset: 0,
          speed: 0,
        },
        [GraphicParts.junctionTop]:{
          offset: 0,
          speed: 0,
        },
        [GraphicParts.junctionBottom]:{
          offset: 0,
          speed: 0,
        },
        [GraphicParts.parchment]:{
          offset: 0,
          speed: 0,
        }
      },
      [PageName.cloudFalls]:{
        [GraphicParts.picture]:{
          offset: 0,
          speed: 0,
        },
        [GraphicParts.junctionTop]:{
          offset: 0,
          speed: 0,
        },
        [GraphicParts.junctionBottom]:{
          offset: 0,
          speed: 0,
        },
        [GraphicParts.parchment]:{
          offset: 0,
          speed: 0,
        }
      },
      [PageName.flowerDust]:{
        [GraphicParts.picture]:{
          offset: 0,
          speed: 0,
        },
        [GraphicParts.junctionTop]:{
          offset: 0,
          speed: 0,
        },
        [GraphicParts.junctionBottom]:{
          offset: 0,
          speed: 0,
        },
        [GraphicParts.parchment]:{
          offset: 0,
          speed: 0,
        }
      }
    },
    [Adaptive.l]: {
      pages:3,
      largeur: '100%',
      [PageName.neverCatch]:{
        [GraphicParts.picture]: {
          offset: 0,
          speed: 0
        },
        [GraphicParts.junctionTop]: {
          offset: 0.28,
          speed: 0.1,
        },
        [GraphicParts.junctionBottom]: {
          offset: 0.83,
          speed: 0.2
        },
        [GraphicParts.parchment]: {
          offset: 0.85,
          speed: 0.18
        }
      },
      [PageName.fire]:{
        [GraphicParts.picture]:{
          offset: 0,
          speed: 0,
        },
        [GraphicParts.junctionTop]:{
          offset: 0,
          speed: 0,
        },
        [GraphicParts.junctionBottom]:{
          offset: 0,
          speed: 0,
        },
        [GraphicParts.parchment]:{
          offset: 0,
          speed: 0,
        }
      },
      [PageName.cloudFalls]:{
        [GraphicParts.picture]:{
          offset: 0,
          speed: 0,
        },
        [GraphicParts.junctionTop]:{
          offset: 0,
          speed: 0,
        },
        [GraphicParts.junctionBottom]:{
          offset: 0,
          speed: 0,
        },
        [GraphicParts.parchment]:{
          offset: 0,
          speed: 0,
        }
      },
      [PageName.flowerDust]:{
        [GraphicParts.picture]:{
          offset: 0,
          speed: 0,
        },
        [GraphicParts.junctionTop]:{
          offset: 0,
          speed: 0,
        },
        [GraphicParts.junctionBottom]:{
          offset: 0,
          speed: 0,
        },
        [GraphicParts.parchment]:{
          offset: 0,
          speed: 0,
        }
      }
    },
    [Adaptive.xl]: {
      pages:3,
      largeur: '100%',
      [PageName.neverCatch]:{
        [GraphicParts.picture]: {
          offset: 0,
          speed: 0
        },
        [GraphicParts.junctionTop]: {
          offset: 0.28,
          speed: 0.1,
        },
        [GraphicParts.junctionBottom]: {
          offset: 0.83,
          speed: 0.2
        },
        [GraphicParts.parchment]: {
          offset: 0.85,
          speed: 0.18
        }
      },
      [PageName.fire]:{
        [GraphicParts.picture]:{
          offset: 0,
          speed: 0,
        },
        [GraphicParts.junctionTop]:{
          offset: 0,
          speed: 0,
        },
        [GraphicParts.junctionBottom]:{
          offset: 0,
          speed: 0,
        },
        [GraphicParts.parchment]:{
          offset: 0,
          speed: 0,
        }
      },
      [PageName.cloudFalls]:{
        [GraphicParts.picture]:{
          offset: 0,
          speed: 0,
        },
        [GraphicParts.junctionTop]:{
          offset: 0,
          speed: 0,
        },
        [GraphicParts.junctionBottom]:{
          offset: 0,
          speed: 0,
        },
        [GraphicParts.parchment]:{
          offset: 0,
          speed: 0,
        }
      },
      [PageName.flowerDust]:{
        [GraphicParts.picture]:{
          offset: 0,
          speed: 0,
        },
        [GraphicParts.junctionTop]:{
          offset: 0,
          speed: 0,
        },
        [GraphicParts.junctionBottom]:{
          offset: 0,
          speed: 0,
        },
        [GraphicParts.parchment]:{
          offset: 0,
          speed: 0,
        }
      }
    }
  }
