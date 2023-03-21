import { ResolutionSize } from "./AdaptiveHook"
import { GraphicParts, LayoutConfig, PageConfig, PageName } from "./ParallaxConfig"


export const ParallaxResolutionConfig: Record<ResolutionSize, Record<PageName, Record<GraphicParts, PageConfig>> & LayoutConfig> = {

    /**#################
     * MOBILE RESOLUTION
     * #################*/

    //OK
    [ResolutionSize.mobile320]: {
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

    //OK
    [ResolutionSize.mobile380]: {
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
                offset: 0.39,
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

    [ResolutionSize.mobile440]: {
        pages: 4,
        largeur: '95%',
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
                offset: 0.38,
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
                offset: 1.75,
                speed: 0.1
            },
            [GraphicParts.junctionBottom]: {
                offset: 1.88,
                speed: 0.15
            }
        },
        [PageName.cloudFalls]: {
            [GraphicParts.picture]: {
                offset: 2,
                speed: 0.1
            },
            [GraphicParts.junctionTop]: {
                offset: 2.7,
                speed: 0.15
            },
            [GraphicParts.junctionBottom]: {
                offset: 2.83,
                speed: 0.12
            }
        },
        [PageName.flowerDust]: {
            [GraphicParts.picture]: {
                offset: 3,
                speed: 0.2,
            },
            [GraphicParts.junctionTop]: {
                offset: 3.75,
                speed: 0.1,
            },
            [GraphicParts.junctionBottom]: {
                offset: 3.88,
                speed: 0.15,
            }
        }
    },

    [ResolutionSize.mobile500]: {
        pages: 4,
        largeur: '95%',
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
                offset: 0.38,
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
                offset: 1.75,
                speed: 0.1
            },
            [GraphicParts.junctionBottom]: {
                offset: 1.88,
                speed: 0.15
            }
        },
        [PageName.cloudFalls]: {
            [GraphicParts.picture]: {
                offset: 2,
                speed: 0.1
            },
            [GraphicParts.junctionTop]: {
                offset: 2.7,
                speed: 0.15
            },
            [GraphicParts.junctionBottom]: {
                offset: 2.83,
                speed: 0.12
            }
        },
        [PageName.flowerDust]: {
            [GraphicParts.picture]: {
                offset: 3,
                speed: 0.2,
            },
            [GraphicParts.junctionTop]: {
                offset: 3.75,
                speed: 0.1,
            },
            [GraphicParts.junctionBottom]: {
                offset: 3.88,
                speed: 0.15,
            }
        }
    },

    /**###################
     * TABLETTE RESOLUTION
     * ###################*/

    [ResolutionSize.tablette560]: {
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

    [ResolutionSize.tablette620]: {
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

    [ResolutionSize.tablette680]: {
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

    [ResolutionSize.tablette740]: {
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

    [ResolutionSize.tablette800]: {
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

    [ResolutionSize.tablette860]: {
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

    [ResolutionSize.tablette920]: {
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

    [ResolutionSize.tablette980]: {
        pages: 4,
        largeur: '90%',
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

    [ResolutionSize.tablette1040]: {
        pages: 4,
        largeur: '90%',
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

    /**##################
     * DESKTOP RESOLUTION
     * ##################*/

    [ResolutionSize.laptop]: {
        pages: 4,
        largeur: '50%',
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

    [ResolutionSize.laptopL]: {
        pages: 4,
        largeur: '25%',
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
                offset: 0.38,
                speed: 0.1
            },
            [GraphicParts.junctionBottom]: {
                offset: 0.98,
                speed: 0.2
            }
        },
        [PageName.fire]: {
            [GraphicParts.picture]: {
                offset: 1,
                speed: 0.2
            },
            [GraphicParts.junctionTop]: {
                offset: 1.69,
                speed: 0.1
            },
            [GraphicParts.junctionBottom]: {
                offset: 1.92,
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
                offset: 3.68,
                speed: 0.1,
            },
            [GraphicParts.junctionBottom]: {
                offset: 3.85,
                speed: 0.15,
            }
        }
    }

}