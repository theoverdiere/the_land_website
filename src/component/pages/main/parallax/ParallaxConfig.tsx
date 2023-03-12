import { Adaptive } from "./AdaptiveHook"

import junctionNeverCatchTop from './imgs/neverCatch/junction_top_nevercatch.svg';
import junctionNeverCatchBottom from './imgs/neverCatch/junction_bottom_nevercatch.svg';

import fireSoon from './imgs/fire/fire_soon.svg';
import junctionFireTop from './imgs/fire/jonction_top.svg';
import junctionFireBottom from './imgs/fire/jonction_bottom.svg';

import cloudFallsSoon from './imgs/cloudFalls/cloud_falls_soon.svg';
import junctionCloudFallsTop from './imgs/cloudFalls/jonction_top_three.svg';
import junctionCloudFallsBottom from './imgs/cloudFalls/jonction_bottom_three.svg';

import flowerdustSoon from './imgs/flowerdust/flowerdust_soon.svg';
import junctionFlowerdustTop from './imgs/flowerdust/jonction_top_four.svg';
import junctionFlowerdustBottom from './imgs/flowerdust/jonction_bottom_four.svg';

import NeverCatchSvg from "./imgs/neverCatch/NeverCatchSvg";
import FireSvg from "./imgs/fire/FireSvg";
import CloudFallsSvg from "./imgs/cloudFalls/CloudFallsSvg";
import FlowerdustSvg from "./imgs/flowerdust/FlowerdustSvg";


export enum PageName {
  none = 'none',
  neverCatch = 'neverCatch',
  fire = 'fire',
  cloudFalls = 'cloudFalls',
  flowerDust = 'flowerDust',
}

export const ReleasedTrack = [PageName.neverCatch];

export interface PageComposition {
  imagesUris: {
    pictureSvg?: JSX.Element,
    junctionTopUri?: JSX.Element,
    junctionBottomUri?: JSX.Element
  }
}

export const PageCompositions: Record<PageName, PageComposition> = {
  [PageName.none]: {
    imagesUris: {}
  },
  [PageName.neverCatch]: {
    imagesUris: {
      pictureSvg: <NeverCatchSvg></NeverCatchSvg>,
      junctionTopUri: <img alt="NeverCatch Fire Junction Top" src={junctionNeverCatchTop} />,
      junctionBottomUri: <img alt="NeverCatch Fire Junction Bottom" src={junctionNeverCatchBottom} />

    }
  },
  [PageName.fire]: {
    imagesUris: {
      pictureSvg: ReleasedTrack.includes(PageName.fire) ? <FireSvg></FireSvg> : <img alt="Fire Track Soon Released!" src={fireSoon} />,
      junctionTopUri: <img alt="Fire Cloud Falls Junction Top" src={junctionFireTop} />,
      junctionBottomUri: <img alt="Fire Cloud Falls Junction Bottom" src={junctionFireBottom} />
    }
  },
  [PageName.cloudFalls]: {
    imagesUris: {
      pictureSvg: ReleasedTrack.includes(PageName.cloudFalls) ? <CloudFallsSvg></CloudFallsSvg> : <img alt="Cloud Falls Track Soon Released!" src={cloudFallsSoon} />,
      junctionTopUri: <img alt="Cloud Falls Flowerdust Junction Top" src={junctionCloudFallsTop} />,
      junctionBottomUri: <img alt="Cloud Falls Flowerdust Junction Bottom" src={junctionCloudFallsBottom} />
    }
  },
  [PageName.flowerDust]: {
    imagesUris: {
      pictureSvg: ReleasedTrack.includes(PageName.flowerDust) ? <FlowerdustSvg></FlowerdustSvg> : <img alt="Flowerdust Track Soon Released!" src={flowerdustSoon} />,
      junctionTopUri: <img alt="Flowerdust Junction Top" src={junctionFlowerdustTop} />,
      junctionBottomUri: <img alt="Flowerdust Junction Bottom" src={junctionFlowerdustBottom} />
    }
  }
}

export enum GraphicParts {
  picture = 'picture',
  junctionTop = 'junctionTop',
  junctionBottom = 'junctionBottom'
}

export interface PageConfig {
  offset: number
  speed: number
}

export interface LayoutConfig {
  pages: number
  largeur: string
}

export const ParallaxConfig: Record<Adaptive, Record<PageName, Record<GraphicParts, PageConfig>> & LayoutConfig> = {

  // Mobile Configuration
  [Adaptive.mobile320]: {
    pages: 4,
    largeur: '100%',
    [PageName.none]: {
      [GraphicParts.picture]: {
        offset: 0,
        speed: 0
      },
      [GraphicParts.junctionTop]: {
        offset: 0,
        speed: 0
      },
      [GraphicParts.junctionBottom]: {
        offset: 0,
        speed: 0
      }
    },
    [PageName.neverCatch]: {
      [GraphicParts.picture]: {
        offset: 0,
        speed: 0
      },
      [GraphicParts.junctionTop]: {
        offset: 0.37,
        speed: 0.1
      },
      [GraphicParts.junctionBottom]: {
        offset: 0.9,
        speed: 0.2
      }
    },
    [PageName.fire]: {
      [GraphicParts.picture]: {
        offset: 1,
        speed: 0.2
      },
      [GraphicParts.junctionTop]: {
        offset: 1.72,
        speed: 0.1
      },
      [GraphicParts.junctionBottom]: {
        offset: 1.87,
        speed: 0.15
      }
    },
    [PageName.cloudFalls]: {
      [GraphicParts.picture]: {
        offset: 2,
        speed: 0.1
      },
      [GraphicParts.junctionTop]: {
        offset: 2.64,
        speed: 0.15
      },
      [GraphicParts.junctionBottom]: {
        offset: 2.89,
        speed: 0.12
      }
    },
    [PageName.flowerDust]: {
      [GraphicParts.picture]: {
        offset: 3,
        speed: 0.2,
      },
      [GraphicParts.junctionTop]: {
        offset: 3.74,
        speed: 0.1,
      },
      [GraphicParts.junctionBottom]: {
        offset: 3.9,
        speed: 0.15,
      }
    }
  },

  [Adaptive.mobile375]: {
    pages: 4,
    largeur: '100%',
    [PageName.none]: {
      [GraphicParts.picture]: {
        offset: 0,
        speed: 0
      },
      [GraphicParts.junctionTop]: {
        offset: 0,
        speed: 0
      },
      [GraphicParts.junctionBottom]: {
        offset: 0,
        speed: 0
      }
    },
    // OK
    [PageName.neverCatch]: {
      [GraphicParts.picture]: {
        offset: 0,
        speed: 0
      },
      [GraphicParts.junctionTop]: {
        offset: 0.38,
        speed: 0.1
      },
      [GraphicParts.junctionBottom]: {
        offset: 0.85,
        speed: 0.2
      }
    },
    [PageName.fire]: {
      [GraphicParts.picture]: {
        offset: 1,
        speed: 0.2
      },
      [GraphicParts.junctionTop]: {
        offset: 1.8,
        speed: 0.1
      },
      [GraphicParts.junctionBottom]: {
        offset: 1.88,
        speed: 0.15
      }
    },
    [PageName.cloudFalls]: {
      [GraphicParts.picture]: {
        offset: 2.2,
        speed: 0.1
      },
      [GraphicParts.junctionTop]: {
        offset: 2.9,
        speed: 0.15
      },
      [GraphicParts.junctionBottom]: {
        offset: 2.96,
        speed: 0.12
      }
    },
    [PageName.flowerDust]: {
      [GraphicParts.picture]: {
        offset: 3.017,
        speed: 0.2,
      },
      [GraphicParts.junctionTop]: {
        offset: 5,
        speed: 0,
      },
      [GraphicParts.junctionBottom]: {
        offset: 5,
        speed: 0,
      }
    }
  },
  [Adaptive.mobile425]: {
    pages: 4,
    largeur: '100%',
    // OK
    [PageName.none]: {
      [GraphicParts.picture]: {
        offset: 0,
        speed: 0
      },
      [GraphicParts.junctionTop]: {
        offset: 0,
        speed: 0
      },
      [GraphicParts.junctionBottom]: {
        offset: 0,
        speed: 0
      }
    },
    [PageName.neverCatch]: {
      [GraphicParts.picture]: {
        offset: 0,
        speed: 0
      },
      [GraphicParts.junctionTop]: {
        offset: 0.5,
        speed: 0.1
      },
      [GraphicParts.junctionBottom]: {
        offset: 0.88,
        speed: 0.2
      }
    },
    [PageName.fire]: {
      [GraphicParts.picture]: {
        offset: 1,
        speed: 0.2
      },
      [GraphicParts.junctionTop]: {
        offset: 1.8,
        speed: 0.1
      },
      [GraphicParts.junctionBottom]: {
        offset: 1.88,
        speed: 0.15
      }
    },
    [PageName.cloudFalls]: {
      [GraphicParts.picture]: {
        offset: 2.2,
        speed: 0.1
      },
      [GraphicParts.junctionTop]: {
        offset: 2.9,
        speed: 0.15
      },
      [GraphicParts.junctionBottom]: {
        offset: 2.96,
        speed: 0.12
      }
    },
    [PageName.flowerDust]: {
      [GraphicParts.picture]: {
        offset: 3.017,
        speed: 0.2,
      },
      [GraphicParts.junctionTop]: {
        offset: 5,
        speed: 0,
      },
      [GraphicParts.junctionBottom]: {
        offset: 5,
        speed: 0,
      }
    }
  },
  [Adaptive.mobileL]: {
    pages: 4,
    largeur: '100%',
    [PageName.none]: {
      [GraphicParts.picture]: {
        offset: 0,
        speed: 0
      },
      [GraphicParts.junctionTop]: {
        offset: 0,
        speed: 0
      },
      [GraphicParts.junctionBottom]: {
        offset: 0,
        speed: 0
      }
    },
    [PageName.neverCatch]: {
      [GraphicParts.picture]: {
        offset: 0,
        speed: 0
      },
      [GraphicParts.junctionTop]: {
        offset: 0.3,
        speed: 0.1
      },
      [GraphicParts.junctionBottom]: {
        offset: 0.8,
        speed: 0.2
      }
    },
    [PageName.fire]: {
      [GraphicParts.picture]: {
        offset: 1,
        speed: 0.2
      },
      [GraphicParts.junctionTop]: {
        offset: 1.3,
        speed: 0.1
      },
      [GraphicParts.junctionBottom]: {
        offset: 2.5,
        speed: 0.15
      }
    },
    [PageName.cloudFalls]: {
      [GraphicParts.picture]: {
        offset: 2,
        speed: 0.1
      },
      [GraphicParts.junctionTop]: {
        offset: 2.9,
        speed: 0.15
      },
      [GraphicParts.junctionBottom]: {
        offset: 2.96,
        speed: 0.12
      }
    },
    [PageName.flowerDust]: {
      [GraphicParts.picture]: {
        offset: 3,
        speed: 0.2,
      },
      [GraphicParts.junctionTop]: {
        offset: 5,
        speed: 0,
      },
      [GraphicParts.junctionBottom]: {
        offset: 5,
        speed: 0,
      }
    }
  },
  [Adaptive.tablette]: {
    pages: 4,
    largeur: '100%',
    [PageName.none]: {
      [GraphicParts.picture]: {
        offset: 0,
        speed: 0
      },
      [GraphicParts.junctionTop]: {
        offset: 0,
        speed: 0
      },
      [GraphicParts.junctionBottom]: {
        offset: 0,
        speed: 0
      }
    },
    [PageName.neverCatch]: {
      [GraphicParts.picture]: {
        offset: 0,
        speed: 0
      },
      [GraphicParts.junctionTop]: {
        offset: 0.3,
        speed: 0.1
      },
      [GraphicParts.junctionBottom]: {
        offset: 0.8,
        speed: 0.2
      }
    },
    [PageName.fire]: {
      [GraphicParts.picture]: {
        offset: 1,
        speed: 0.2
      },
      [GraphicParts.junctionTop]: {
        offset: 1.8,
        speed: 0.1
      },
      [GraphicParts.junctionBottom]: {
        offset: 1.88,
        speed: 0.15
      }
    },
    [PageName.cloudFalls]: {
      [GraphicParts.picture]: {
        offset: 2.2,
        speed: 0.1
      },
      [GraphicParts.junctionTop]: {
        offset: 2.9,
        speed: 0.15
      },
      [GraphicParts.junctionBottom]: {
        offset: 2.96,
        speed: 0.12
      }
    },
    [PageName.flowerDust]: {
      [GraphicParts.picture]: {
        offset: 3.017,
        speed: 0.2,
      },
      [GraphicParts.junctionTop]: {
        offset: 5,
        speed: 0,
      },
      [GraphicParts.junctionBottom]: {
        offset: 5,
        speed: 0,
      }
    }
  },
  [Adaptive.laptop]: {
    pages: 4,
    largeur: '100%',
    [PageName.none]: {
      [GraphicParts.picture]: {
        offset: 0,
        speed: 0
      },
      [GraphicParts.junctionTop]: {
        offset: 0,
        speed: 0
      },
      [GraphicParts.junctionBottom]: {
        offset: 0,
        speed: 0
      }
    },
    [PageName.neverCatch]: {
      [GraphicParts.picture]: {
        offset: 0,
        speed: 0
      },
      [GraphicParts.junctionTop]: {
        offset: 0.3,
        speed: 0.1
      },
      [GraphicParts.junctionBottom]: {
        offset: 0.8,
        speed: 0.2
      }
    },
    [PageName.fire]: {
      [GraphicParts.picture]: {
        offset: 1,
        speed: 0.2
      },
      [GraphicParts.junctionTop]: {
        offset: 1.8,
        speed: 0.1
      },
      [GraphicParts.junctionBottom]: {
        offset: 1.88,
        speed: 0.15
      }
    },
    [PageName.cloudFalls]: {
      [GraphicParts.picture]: {
        offset: 2.2,
        speed: 0.1
      },
      [GraphicParts.junctionTop]: {
        offset: 2.9,
        speed: 0.15
      },
      [GraphicParts.junctionBottom]: {
        offset: 2.96,
        speed: 0.12
      }
    },
    [PageName.flowerDust]: {
      [GraphicParts.picture]: {
        offset: 3.017,
        speed: 0.2,
      },
      [GraphicParts.junctionTop]: {
        offset: 5,
        speed: 0,
      },
      [GraphicParts.junctionBottom]: {
        offset: 5,
        speed: 0,
      }
    }
  },
  [Adaptive.laptopL]: {
    pages: 4,
    largeur: '100%',
    [PageName.none]: {
      [GraphicParts.picture]: {
        offset: 0,
        speed: 0
      },
      [GraphicParts.junctionTop]: {
        offset: 0,
        speed: 0
      },
      [GraphicParts.junctionBottom]: {
        offset: 0,
        speed: 0
      }
    },
    [PageName.neverCatch]: {
      [GraphicParts.picture]: {
        offset: 0,
        speed: 0
      },
      [GraphicParts.junctionTop]: {
        offset: 0.3,
        speed: 0.1
      },
      [GraphicParts.junctionBottom]: {
        offset: 0.8,
        speed: 0.2
      }
    },
    [PageName.fire]: {
      [GraphicParts.picture]: {
        offset: 1,
        speed: 0.2
      },
      [GraphicParts.junctionTop]: {
        offset: 1.8,
        speed: 0.1
      },
      [GraphicParts.junctionBottom]: {
        offset: 1.88,
        speed: 0.15
      }
    },
    [PageName.cloudFalls]: {
      [GraphicParts.picture]: {
        offset: 2.2,
        speed: 0.1
      },
      [GraphicParts.junctionTop]: {
        offset: 2.9,
        speed: 0.15
      },
      [GraphicParts.junctionBottom]: {
        offset: 2.96,
        speed: 0.12
      }
    },
    [PageName.flowerDust]: {
      [GraphicParts.picture]: {
        offset: 3.017,
        speed: 0.2,
      },
      [GraphicParts.junctionTop]: {
        offset: 5,
        speed: 0,
      },
      [GraphicParts.junctionBottom]: {
        offset: 5,
        speed: 0,
      }
    }
  }
}

