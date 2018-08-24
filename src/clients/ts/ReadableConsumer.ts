import axios from 'axios';

export class ReadableConsumer<T> {
  constructor(private config: {
    domain: string;
    route: string;
    method: 'post' | 'get';
    params?: {
      [k: string]: string;
    },
    headers?: {
      [k: string]: string;
    }
  }) {
  }

  read() {
    const endpoint = this.config.domain + this.config.route;
    console.log('[ReadableConsumer] read()', this.config);

    return axios.get(endpoint, this.config);
  }
}