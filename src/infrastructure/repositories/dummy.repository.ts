import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { DummyRepositoryAbstract } from '@domain/dummy/repositories/dummy.repository.abstract';
import { DummyMapper } from '../mappers/dummy.mapper';

@Injectable()
export class DummyRepository implements DummyRepositoryAbstract {
  constructor(@InjectConnection() private connection: Connection) {}

  async find() {
    const dummy = await this.connection.collection('dummy').findOne();
    return DummyMapper.mapToEntity(dummy);
  }
}
