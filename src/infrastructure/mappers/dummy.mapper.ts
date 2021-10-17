import { Dummy } from '../../domain/dummy/dummy';

export class DummyMapper {
  public static mapToDict(dummy: Dummy) {
    return {
      _id: dummy.id,
      name: dummy.name,
      lastName: dummy.lastName,
    };
  }

  public static mapToEntity(dummy) {
    return new Dummy(dummy.name, dummy.lastName, dummy._id);
  }
}
