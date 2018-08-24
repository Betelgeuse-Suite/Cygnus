// this will be compiled based on th resource.json

// const domain = 'https://jackpocket.com/';
const domain = 'http://localhost:5000/';
// This resource Url could be even more criptic, but for now it 
//  has the namespace __resources/{resourceName}/{resourceVersion}
const route = '__resources/lottery/0_0_0/';

const method: 'get' | 'post' = 'get';

export const config = {
  method,
  domain,
  route,
  headers: {
    "authorization": "Basic N0V5RkIxZzRJM2x6c0oyNzEwNm9BUG83NzJkaDdVNFA6",
    "content-encoding": "gzip"
  },
}