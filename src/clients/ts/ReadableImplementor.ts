export class ReadableImplementor<ResourceModel> {
  public route: string;
  public method: 'get' | 'post';

  constructor(public implement: () => ResourceModel, config: {
    method: 'post' | 'get',
    route: string;
    // params?: { [k: string]: string };
  }) {
    this.route = config.route;
    this.method = config.method;
  }
}