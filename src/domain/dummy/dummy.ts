import { v4 as uuid } from 'uuid';

export class Dummy {
  constructor(
    public readonly name: string,
    public readonly lastName: string,
    public readonly id: string = uuid(),
  ) {}

  getFullName() {
    return `${this.name} ${this.lastName}`;
  }
}
