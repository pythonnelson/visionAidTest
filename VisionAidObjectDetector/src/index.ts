import { NitroModules } from 'react-native-nitro-modules'

import type { VisionAidObjectDetector } from './specs/VisionAidObjectDetector.nitro'

export type { VisionAidObjectDetector }

export const visionAidObjectDetector =
  NitroModules.createHybridObject<VisionAidObjectDetector>(
    'VisionAidObjectDetector',
  )
