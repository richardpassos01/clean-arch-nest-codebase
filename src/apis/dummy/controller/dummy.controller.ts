import { Controller, Get } from '@nestjs/common';
import { Dummy } from '@domain/dummy/dummy';
import { GetDummyAbstract } from '@domain/dummy/use-cases/get.dummy.abstract';

@Controller()
export class DummyController {
  constructor(private readonly getDummy: GetDummyAbstract) {}

  @Get()
  getHello(): Promise<Dummy | null> {
    return this.getDummy.execute();
  }
}
