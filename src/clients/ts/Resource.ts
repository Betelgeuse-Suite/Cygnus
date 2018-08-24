export interface DuplexResource<ReadModel, WriteModel> {
  read(): Promise<ReadModel>;
  write(m: WriteModel): Promise<void>;
}

export interface ReadableResource<Model> {
  read(): Promise<Model>
}

export interface WritableResource<Model> {
  write(m: Model): Promise<void>;
}

