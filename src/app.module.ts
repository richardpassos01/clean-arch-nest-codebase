import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DummyModule } from '@apis/dummy/dummy.module';

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
