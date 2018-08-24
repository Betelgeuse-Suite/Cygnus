import { getConsumer } from "../ResourcesRepository/Lottery/.bin/ts";

const lotteryResource = getConsumer();

(() => {
  console.log('client started');

  lotteryResource.read().then((r) => {
    console.log('client receives', r.data);
  }).catch((e) => {
    console.error('client error', e);
  });
})();
