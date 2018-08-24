import { ReadableConsumer } from '../../../../../src/clients/ts/ReadableConsumer';
import { config } from './manifest';

export const getConsumer = () => {
  return new ReadableConsumer(config);
};
