import { Settings } from './types';

export const PACKAGE_NAME = 'react-loosely-lazy';

export const MODE = {
  RENDER: 'RENDER' as const,
  HYDRATE: 'HYDRATE' as const,
};

export const PHASE = {
  PAINT: 0,
  AFTER_PAINT: 1,
  LAZY: 2,
};

export const PRIORITY = {
  HIGH: 0,
  LOW: 2,
};

export const PHASE_LAZY_DELAY = 50;

export const COLLECTED = new Map();

export const SETTINGS: Settings = {
  CURRENT_MODE: MODE.HYDRATE,
  MANIFEST: {},
  CROSS_ORIGIN: undefined,
};
