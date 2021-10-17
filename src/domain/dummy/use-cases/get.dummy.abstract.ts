import { Dummy } from '../dummy';

export abstract class GetDummyAbstract {
  abstract execute(): Promise<Dummy | null>;
}
