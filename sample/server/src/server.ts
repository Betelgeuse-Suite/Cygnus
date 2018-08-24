import { getImplementor } from "../../ResourcesRepository/Lottery/.bin/ts/implementor";
import * as express from 'express';
import * as Promise from 'bluebird';

console.log(Promise.resolve);

const app = express();
const port = 5000;

const lotteryResource = getImplementor(() => {
  // Somehow this fetches some data. It could be from the DB, the File or another Http endpoint
  return Promise.resolve({
    id: 34,
    name: 'Powerball',
    jackpot_value: '123 Millions',
  })
});

// const resources = [
//   LotteryResource,
// ]

console.log(lotteryResource.route);

app.get('/' + lotteryResource.route, (_, res) => {
  console.log('[Server]', lotteryResource.route);
  return lotteryResource.implement().then((r) => {
    res.json(r);
  });
});

app.get('/', (_, res) => {
  return res.json('works');
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.listen(port, () => {
  console.info(`Server started`, port);
});