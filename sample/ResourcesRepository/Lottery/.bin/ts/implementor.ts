import { ResourceModel } from './resource';
import { ReadableImplementor } from '../../../../../src/clients/ts/ReadableImplementor';
import * as Promise from 'bluebird';

import { config } from './manifest';

export const getImplementor = (implement: () => Promise<ResourceModel>) => {
  return new ReadableImplementor(implement, config);
};