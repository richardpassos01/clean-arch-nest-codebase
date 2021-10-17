import { Dummy } from '../dummy';

export abstract class DummyRepositoryAbstract {
  abstract find(): Promise<Dummy | null>;
}
