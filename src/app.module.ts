import { Module } from '@nestjs/common';
import { DummyModule } from './apis/dummy/dummy.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    DummyModule,
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb://dummy:dummy_pass@localhost:27017/test',
      }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
