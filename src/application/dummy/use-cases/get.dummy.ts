import { Injectable } from '@nestjs/common';
import { GetDummyAbstract } from '@domain/dummy/use-cases/get.dummy.abstract';
import { DummyRepositoryAbstract } from '@domain/dummy/repositories/dummy.repository.abstract';
import { Dummy } from '@domain/dummy/dummy';

@Injectable()
export class GetDummy implements GetDummyAbstract {
  constructor(private readonly dummyRepository: DummyRepositoryAbstract) {}

  async execute(): Promise<Dummy | null> {
    return this.dummyRepository.find();
  }
}
