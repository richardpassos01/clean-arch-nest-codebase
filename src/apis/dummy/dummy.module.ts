import { Module } from '@nestjs/common';
import { DummyController } from './controller/dummy.controller';
import { GetDummy } from '../../application/dummy/use-cases/get.dummy';
import { DummyRepositoryAbstract } from '../../domain/dummy/repositories/dummy.repository.abstract';
import { DummyRepository } from '../../infrastructure/repositories/dummy.repository';
import { GetDummyAbstract } from '../../domain/dummy/use-cases/get.dummy.abstract';

@Module({
  imports: [],
  controllers: [DummyController],
  providers: [
    { provide: GetDummyAbstract, useClass: GetDummy },
    { provide: DummyRepositoryAbstract, useClass: DummyRepository },
  ],
})
export class DummyModule {}
