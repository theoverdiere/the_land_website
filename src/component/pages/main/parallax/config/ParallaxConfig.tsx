



//Small
import neverCatchSmall from '../config/size/smallSvgSize/neverCatch/neverCatchSmall.svg';
import neverCatchJunctionTopSmall from '../config/size/smallSvgSize/neverCatch/neverCatchJunctionTopSmall.svg';
import neverCatchJunctionBottomSmall from '../config/size/smallSvgSize/neverCatch/neverCatchJunctionBottomSmall.svg';

import fireSmall from '../config/size/smallSvgSize/fire/fireSmall.svg';
import fireSoonSmall from '../config/size/smallSvgSize/fire/fireSoonSmall.svg';
import fireJunctionTopSmall from '../config/size/smallSvgSize/fire/fireJunctionTopSmall.svg';
import fireJunctionBottomSmall from '../config/size/smallSvgSize/fire/fireJunctionBottomSmall.svg';

import cloudsFallSmall from '../config/size/smallSvgSize/cloudsFall/cloudsFallSmall.svg';
import cloudsFallSoonSmall from '../config/size/smallSvgSize/cloudsFall/cloudsFallSoonSmall.svg';
import cloudsFallJunctionTopSmall from '../config/size/smallSvgSize/cloudsFall/cloudsFallJunctionTopSmall.svg';
import cloudsFallJunctionBottomSmall from '../config/size/smallSvgSize/cloudsFall/cloudsFallJunctionBottomSmall.svg';

import flowerDustSmall from '../config/size/smallSvgSize/flowerDust/flowerDustSmall.svg';
import flowerDustSoonSmall from '../config/size/smallSvgSize/flowerDust/flowerDustSoonSmall.svg';
import flowerDustJunctionTopSmall from '../config/size/smallSvgSize/flowerDust/flowerDustJunctionTopSmall.svg';
import flowerDustJunctionBottomSmall from '../config/size/smallSvgSize/flowerDust/flowerDustJunctionBottomSmall.svg';


// Medium
import neverCatchMedium from '../config/size/mediumSvgSize/neverCatch/neverCatchMedium.svg';
import neverCatchJunctionTopMedium from '../config/size/mediumSvgSize/neverCatch/neverCatchJunctionTopMedium.svg';
import neverCatchJunctionBottomMedium from '../config/size/mediumSvgSize/neverCatch/neverCatchJunctionBottomMedium.svg';

import fireMedium from '../config/size/mediumSvgSize/fire/fireMedium.svg';
import fireSoonMedium from '../config/size/mediumSvgSize/fire/fireSoonMedium.svg';
import fireJunctionTopMedium from '../config/size/mediumSvgSize/fire/fireJunctionTopMedium.svg';
import fireJunctionBottomMedium from '../config/size/mediumSvgSize/fire/fireJunctionBottomMedium.svg';

import cloudsFallMedium from '../config/size/mediumSvgSize/cloudsFall/cloudsFallMedium.svg';
import cloudsFallSoonMedium from '../config/size/mediumSvgSize/cloudsFall/cloudsFallSoonMedium.svg';
import cloudsFallJunctionTopMedium from '../config/size/mediumSvgSize/cloudsFall/cloudsFallJunctionTopMedium.svg';
import cloudsFallJunctionBottomMedium from '../config/size/mediumSvgSize/cloudsFall/cloudsFallJunctionBottomMedium.svg';

import flowerDustMedium from '../config/size/mediumSvgSize/flowerDust/flowerDustMedium.svg';
import flowerDustSoonMedium from '../config/size/mediumSvgSize/flowerDust/flowerDustSoonMedium.svg';
import flowerDustJunctionTopMedium from '../config/size/mediumSvgSize/flowerDust/flowerDustJunctionTopMedium.svg';
import flowerDustJunctionBottomMedium from '../config/size/mediumSvgSize/flowerDust/flowerDustJunctionBottomMedium.svg';

import { DeviceModelSize } from './AdaptiveHook';
import NeverCatchMediumSvg from './size/mediumSvgSize/neverCatch/NeverCatchMediumSvg';
import NeverCatchSmallSvg from './size/smallSvgSize/neverCatch/NeverCatchSmallSvg';


export enum PageName {
  none = 'none',
  neverCatch = 'neverCatch',
  fire = 'fire',
  cloudFalls = 'cloudFalls',
  flowerDust = 'flowerDust',
}

export const ReleasedTrack = [PageName.neverCatch, PageName.fire, PageName.cloudFalls, PageName.flowerDust];

export interface PageComposition {
  imagesUris: {
    pictureSvg?: JSX.Element,
    junctionTopUri?: JSX.Element,
    junctionBottomUri?: JSX.Element
  }
}

export const PageCompositions: Record<DeviceModelSize, Record<PageName, PageComposition>> = {
  [DeviceModelSize.small]: {
    [PageName.none]: {
      imagesUris: {}
    },
    [PageName.neverCatch]: {
      imagesUris: {
        pictureSvg: <NeverCatchSmallSvg></NeverCatchSmallSvg>,
        junctionTopUri: <img alt="NeverCatch Fire Junction Top" src={neverCatchJunctionTopSmall} />,
        junctionBottomUri: <img alt="NeverCatch Fire Junction Bottom" src={neverCatchJunctionBottomSmall} />

      }
    },
    [PageName.fire]: {
      imagesUris: {
        pictureSvg: ReleasedTrack.includes(PageName.fire) ? <img alt="Fire Track" src={fireSmall}></img> : <img alt="Fire Track Soon Released!" src={fireSoonSmall} />,
        junctionTopUri: <img alt="Fire Cloud Falls Junction Top" src={fireJunctionTopSmall} />,
        junctionBottomUri: <img alt="Fire Cloud Falls Junction Bottom" src={fireJunctionBottomSmall} />
      }
    },
    [PageName.cloudFalls]: {
      imagesUris: {
        pictureSvg: ReleasedTrack.includes(PageName.cloudFalls) ? <img alt="CloudsFall Track" src={cloudsFallSmall}></img> : <img alt="Cloud Falls Track Soon Released!" src={cloudsFallSoonSmall} />,
        junctionTopUri: <img alt="Cloud Falls Flowerdust Junction Top" src={cloudsFallJunctionTopSmall} />,
        junctionBottomUri: <img alt="Cloud Falls Flowerdust Junction Bottom" src={cloudsFallJunctionBottomSmall} />
      }
    },
    [PageName.flowerDust]: {
      imagesUris: {
        pictureSvg: ReleasedTrack.includes(PageName.flowerDust) ? <img alt="FlowerDust Track" src={flowerDustSmall}></img> : <img alt="Flowerdust Track Soon Released!" src={flowerDustSoonSmall} />,
        junctionTopUri: <img alt="Flowerdust Junction Top" src={flowerDustJunctionTopSmall} />,
        junctionBottomUri: <img alt="Flowerdust Junction Bottom" src={flowerDustJunctionBottomSmall} />
      }
    }
  },
  [DeviceModelSize.medium]: {
    [PageName.none]: {
      imagesUris: {}
    },
    [PageName.neverCatch]: {
      imagesUris: {
        pictureSvg: <NeverCatchMediumSvg></NeverCatchMediumSvg>,
        junctionTopUri: <img alt="NeverCatch Fire Junction Top" src={neverCatchJunctionTopMedium} />,
        junctionBottomUri: <img alt="NeverCatch Fire Junction Bottom" src={neverCatchJunctionBottomMedium} />

      }
    },
    [PageName.fire]: {
      imagesUris: {
        pictureSvg: ReleasedTrack.includes(PageName.fire) ? <img src={fireMedium}></img> : <img alt="Fire Track Soon Released!" src={fireSoonMedium} />,
        junctionTopUri: <img alt="Fire Cloud Falls Junction Top" src={fireJunctionTopMedium} />,
        junctionBottomUri: <img alt="Fire Cloud Falls Junction Bottom" src={fireJunctionBottomMedium} />
      }
    },
    [PageName.cloudFalls]: {
      imagesUris: {
        pictureSvg: ReleasedTrack.includes(PageName.cloudFalls) ? <img src={cloudsFallMedium}></img> : <img alt="Cloud Falls Track Soon Released!" src={cloudsFallSoonMedium} />,
        junctionTopUri: <img alt="Cloud Falls Flowerdust Junction Top" src={cloudsFallJunctionTopMedium} />,
        junctionBottomUri: <img alt="Cloud Falls Flowerdust Junction Bottom" src={cloudsFallJunctionBottomMedium} />
      }
    },
    [PageName.flowerDust]: {
      imagesUris: {
        pictureSvg: ReleasedTrack.includes(PageName.flowerDust) ? <img src={flowerDustMedium}></img> : <img alt="Flowerdust Track Soon Released!" src={flowerDustSoonMedium} />,
        junctionTopUri: <img alt="Flowerdust Junction Top" src={flowerDustJunctionTopMedium} />,
        junctionBottomUri: <img alt="Flowerdust Junction Bottom" src={flowerDustJunctionBottomMedium} />
      }
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
