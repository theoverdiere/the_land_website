import { Adaptive } from "./AdaptiveHook"

import neverCatch from './imgs/neverCatch/nevercatch.svg';
import junctionNeverCatchTop from './imgs/neverCatch/junction_top_nevercatch.svg';
import junctionNeverCatchBottom from './imgs/neverCatch/junction_bottom_nevercatch.svg';

import fire from './imgs/fire/fire.svg';
import junctionFireTop from './imgs/fire/jonction_top.svg';
import junctionFireMiddle from './imgs/fire/jonction_bottom.svg';

import cloudFalls from './imgs/cloudFalls/cloud_falls.svg';
import jonctionThreeTop from './imgs/cloudFalls/jonction_top_three.svg';
import jonctionThreeBottom from './imgs/cloudFalls/jonction_bottom_three.svg';

import flowerdust from './imgs/flowerdust/flowerdust.svg';
import jonctionTopFour from './imgs/flowerdust/jonction_top_four.svg';
import jonctionTopBottom from './imgs/flowerdust/jonction_bottom_four.svg';


export enum PageName {
  none = 'none',
  neverCatch = 'neverCatch',
  fire = 'fire',
  cloudFalls = 'cloudFalls',
  flowerDust = 'flowerDust',
}

export interface PageComposition {
  imagesUris: {
    pictureUri: string,
    junctionTopUri: string,
    junctionBottomUri: string
  }
}

export const PageCompositions: Record<PageName, PageComposition> = {
  [PageName.none]: {
    imagesUris: {
      pictureUri: 'undefined',
      junctionTopUri: 'undefined',
      junctionBottomUri: 'undefined'
    }
  },
  [PageName.neverCatch]: {
    imagesUris: {
      pictureUri: neverCatch,
      junctionTopUri: junctionNeverCatchTop,
      junctionBottomUri: junctionNeverCatchBottom
    }
  },
  [PageName.fire]: {
    imagesUris: {
      pictureUri: fire,
      junctionTopUri: junctionFireTop,
      junctionBottomUri: junctionFireMiddle
    }
  },
  [PageName.cloudFalls]: {
    imagesUris: {
      pictureUri: cloudFalls,
      junctionTopUri: jonctionThreeTop,
      junctionBottomUri: jonctionThreeBottom
    }
  },
  [PageName.flowerDust]: {
    imagesUris: {
      pictureUri: flowerdust,
      junctionTopUri: jonctionTopFour,
      junctionBottomUri: jonctionTopBottom,
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

