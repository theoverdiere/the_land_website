

import junctionNeverCatchBottom from './imgs/neverCatch/junction_bottom_nevercatch.svg';
import junctionNeverCatchTop from './imgs/neverCatch/junction_top_nevercatch.svg';


import fireSoon from './imgs/fire/fire_soon.svg';
import junctionFireBottom from './imgs/fire/jonction_bottom.svg';
import junctionFireTop from './imgs/fire/jonction_top.svg';

import cloudFallsSoon from './imgs/cloudFalls/cloud_falls_soon.svg';
import junctionCloudFallsBottom from './imgs/cloudFalls/jonction_bottom_three.svg';
import junctionCloudFallsTop from './imgs/cloudFalls/jonction_top_three.svg';

import CloudFallsSvg from './imgs/cloudFalls/CloudFallsSvg';
import FireSvg from './imgs/fire/FireSvg';
import FlowerdustSvg from './imgs/flowerdust/FlowerdustSvg';
import flowerdustSoon from './imgs/flowerdust/flowerdust_soon.svg';
import junctionFlowerdustBottom from './imgs/flowerdust/jonction_bottom_four.svg';
import junctionFlowerdustTop from './imgs/flowerdust/jonction_top_four.svg';
import NeverCatchSvg from './imgs/neverCatch/NeverCatchSvg';


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



